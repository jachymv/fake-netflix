export interface Movie {
  id: number;
  image: string;
  title: string;
  year: number;
  director: string;
  genre: string;
  runtimeMin: number;
  rating: number;
  cast: string[];
  watched: boolean;
  note?: string
}

export const moviesData: Movie[] = [
    {
      id: 1,
      image: "/images/movie12.jpg",
      title: "Inception",
      year: 2010,
      director: "Christopher Nolan",
      genre: "sci-fi",
      runtimeMin: 148,
      rating: 8.8,
      cast: ["Leonardo DiCaprio", "Joseph Gordon-Levitt"],
      watched: true,
      note: "Worth watching twice",
    },
    {
      id: 2,
      image: "/images/movie11.avif",
      title: "Interstellar",
      year: 2014,
      director: "Christopher Nolan",
      genre: "sci-fi",
      runtimeMin: 169,
      rating: 8.7,
      cast: ["Matthew McConaughey", "Anne Hathaway"],
      watched: true,
    },
    {
      id: 3,
      image: "/images/movie15.jpg",
      title: "The Dark Knight",
      year: 2008,
      director: "Christopher Nolan",
      genre: "action",
      runtimeMin: 152,
      rating: 9.0,
      cast: ["Christian Bale", "Heath Ledger"],
      watched: true,
    },
    {
      id: 4,
      image: "/images/movie13.jpg",
      title: "Oppenheimer",
      year: 2023,
      director: "Christopher Nolan",
      genre: "drama",
      runtimeMin: 180,
      rating: 8.3,
      cast: ["Cillian Murphy", "Emily Blunt"],
      watched: false,
    },
    {
      id: 5,
      image: "/images/movie19.jpg",
      title: "Arrival",
      year: 2016,
      director: "Denis Villeneuve",
      genre: "sci-fi",
      runtimeMin: 116,
      rating: 7.9,
      cast: ["Amy Adams", "Jeremy Renner"],
      watched: false,
      note: "Recommended by a friend",
    },
    {
      id: 6,
      image: "/images/movie18.jpg",
      title: "Blade Runner 2049",
      year: 2017,
      director: "Denis Villeneuve",
      genre: "sci-fi",
      runtimeMin: 164,
      rating: 8.0,
      cast: ["Ryan Gosling", "Harrison Ford"],
      watched: true,
    },
    {
      id: 7,
      image: "/images/movie17.jpg",
      title: "Dune",
      year: 2021,
      director: "Denis Villeneuve",
      genre: "sci-fi",
      runtimeMin: 155,
      rating: 8.0,
      cast: ["Timothée Chalamet", "Rebecca Ferguson"],
      watched: true,
    },
    {
      id: 8,
      image: "/images/movie14.jpg",
      title: "Pulp Fiction",
      year: 1994,
      director: "Quentin Tarantino",
      genre: "crime",
      runtimeMin: 154,
      rating: 8.9,
      cast: ["John Travolta", "Samuel L. Jackson"],
      watched: true,
      note: "A classic",
    },
    {
      id: 9,
      image: "/images/movie16.jpg",
      title: "Django Unchained",
      year: 2012,
      director: "Quentin Tarantino",
      genre: "western",
      runtimeMin: 165,
      rating: 8.5,
      cast: ["Jamie Foxx", "Christoph Waltz"],
      watched: false,
    },
  ];

export interface Director {
  id: number;
  name: string;
  birthYear: number;
  country: string;
  oscars: number;
  bio: string;
}

  export const directorsData: Director[] = [
    {
      id: 1,
      name: "Christopher Nolan",
      birthYear: 1970,
      country: "United Kingdom",
      oscars: 2,
      bio: "British-American director known for complex, non-linear stories and a preference for practical effects and shooting on film. He started with the low-budget Following and broke through with Memento. Best known for The Dark Knight trilogy, Inception, Interstellar and Oppenheimer, which won him the Oscar for Best Director.",
    },
    {
      id: 2,
      name: "Quentin Tarantino",
      birthYear: 1963,
      country: "United States",
      oscars: 2,
      bio: "American director and screenwriter who learned about film working in a video rental store rather than at film school. His films are known for sharp dialogue, stories told out of order and stylised violence. Pulp Fiction won the Palme d'Or at Cannes, and he won Oscars for the screenplays of Pulp Fiction and Django Unchained.",
    },
    {
      id: 3,
      name: "Denis Villeneuve",
      birthYear: 1967,
      country: "Canada",
      oscars: 0,
      bio: "French-Canadian director from Quebec, known for slow, atmospheric films with a strong visual style. After Incendies and Prisoners he moved to large-scale science fiction with Arrival, Blade Runner 2049 and the Dune films. He was nominated for the Oscar for Best Director for Arrival.",
    },
  ];