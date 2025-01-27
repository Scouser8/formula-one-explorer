import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import clsx from "clsx";

type Props = {
  title: string;
  description?: string;
  btnText?: string;
  onClick?: Function;
  className?: string;
  children: React.ReactNode;
};

export default function CustomCard(props: Props) {
  const {
    title,
    description,
    btnText,
    onClick,
    className,
    children: content,
  } = props;
  return (
    <Card
      className={clsx(className, "cursor-pointer")}
      onClick={() => onClick?.()}
    >
      <CardHeader>
        <CardTitle>{title}</CardTitle>
        {!!description && <CardDescription>{description}</CardDescription>}
      </CardHeader>
      <CardContent className="space-y-2 truncate">{content}</CardContent>
      {!!btnText && (
        <CardFooter>
          <Button onClick={() => onClick?.()}>{btnText}</Button>
        </CardFooter>
      )}
    </Card>
  );
}
