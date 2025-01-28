import React from "react";
import "@testing-library/jest-dom/vitest";
import { render, screen, waitFor } from "@testing-library/react";
import { describe, it, expect, vi, beforeEach } from "vitest";
import axios from "../../../src/axios";
import Seasons from "../../../src/components/seasons/Seasons";
import { BrowserRouter } from "react-router";

// Mock axios
vi.mock("axios", () => ({
  default: {
    get: vi.fn(),
    create: vi.fn(),
  },
}));

describe("Seasons Component", () => {
  beforeEach(() => {
    vi.resetAllMocks(); // Reset mocks before each test
  });

  const mockAxios = vi.mocked(axios.get);
  const mockSeasons = {
    MRData: {
      xmlns: "http://ergast.com/mrd/1.5",
      series: "f1",
      url: "http://ergast.com/api/f1/seasons.json",
      limit: "10",
      offset: "60",
      total: "75",
      SeasonTable: {
        Seasons: [
          {
            season: "2010",
            url: "http://en.wikipedia.org/wiki/2010_Formula_One_season",
          },
          {
            season: "2011",
            url: "http://en.wikipedia.org/wiki/2011_Formula_One_season",
          },
          {
            season: "2012",
            url: "http://en.wikipedia.org/wiki/2012_Formula_One_season",
          },
          {
            season: "2013",
            url: "http://en.wikipedia.org/wiki/2013_Formula_One_season",
          },
          {
            season: "2014",
            url: "http://en.wikipedia.org/wiki/2014_Formula_One_season",
          },
          {
            season: "2015",
            url: "http://en.wikipedia.org/wiki/2015_Formula_One_season",
          },
          {
            season: "2016",
            url: "http://en.wikipedia.org/wiki/2016_Formula_One_season",
          },
          {
            season: "2017",
            url: "http://en.wikipedia.org/wiki/2017_Formula_One_season",
          },
          {
            season: "2018",
            url: "http://en.wikipedia.org/wiki/2018_Formula_One_World_Championship",
          },
          {
            season: "2019",
            url: "http://en.wikipedia.org/wiki/2019_Formula_One_World_Championship",
          },
        ],
      },
    },
  };

  beforeEach(() => {
    // We use mockResolvedValue to mock the API response.
    mockAxios.mockResolvedValue({ data: mockSeasons });
  });

  it("fetches and displays seasons", async () => {
    const mockSeasonsData = {
      data: {
        MRData: {
          total: 2,
          SeasonTable: {
            Seasons: [
              { season: "2023", url: "https://example.com/2023" },
              { season: "2024", url: "https://example.com/2024" },
            ],
          },
        },
      },
    };

    // ✅ Correct way to mock axios with Vitest
    (axios.get as unknown as jest.Mock).mockResolvedValueOnce(mockSeasonsData);

    render(
      <BrowserRouter>
        <Seasons />
      </BrowserRouter>
    );

    // Wait for the component to fetch and render data
    await waitFor(() => {
      expect(screen.getByText("Formula One Seasons")).toBeInTheDocument();
      expect(screen.getByText("2023")).toBeInTheDocument();
      expect(screen.getByText("2024")).toBeInTheDocument();
    });
  });
});
