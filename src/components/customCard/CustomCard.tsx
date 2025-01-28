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
  headerIcon?: JSX.Element;
  description?: string;
  btnText?: string;
  onClick?: Function;
  className?: string;
  children: React.ReactNode;
};

export default function CustomCard(props: Props) {
  const {
    title,
    headerIcon,
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
        <div className="flex justify-between items-center">
          <CardTitle>{title}</CardTitle>
          {!!headerIcon && headerIcon}
        </div>
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
