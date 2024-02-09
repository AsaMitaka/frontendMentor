type TechnologyProps = {
  description: string;
  images: {
    landscape: string;
    portrait: string;
  };
  name: string;
};

type CrewProps = {
  bio: string;
  images: {
    png: string;
    webp: string;
  };
  name: string;
  role: string;
};

type PlanetsProps = {
  name: string;
  description: string;
  distance: string;
  images: {
    png: string;
    webp: string;
  };
  travel: string;
};
