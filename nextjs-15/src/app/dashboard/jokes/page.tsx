type JokeResponse = {
  error: boolean;
  amount: number;
  jokes: Array<{
    category: string;
    type: 'single' | 'twopart';
    joke?: string;
    setup?: string;
    delivery?: string;
    flags: {
      nsfw: boolean;
      religious: boolean;
      political: boolean;
      racist: boolean;
      sexist: boolean;
      explicit: boolean;
    };
    id: number;
    safe: boolean;
    lang: string;
  }>;
};

const fetchJokes = async () => {
  // ?? Step 11 - Membuat halaman error untuk /dashboard/jokes (3)
  // Membuat error terjadi secara "accidental"
  const response = await fetch("https://v2.jokeapi.dev/joke/Programming?blacklistFlags=nsfw,religious,political,racist,sexist,explicit&amount=10");
  const responseJson: JokeResponse = await response.json();

  // Simulasi untuk api yang lambat
  await new Promise((resolve) => setTimeout(resolve, 2000));

  // ?? Step 11 - Membuat halaman error untuk /dashboard/jokes (4)
  // Lempar error ketika terjadi masalah
  if (!response.ok) {
    throw new Error("Waduh Error ...");
  }

  // Kembalian dari fungsi ini adalah data yang sudah di-parse
  return responseJson.jokes;
};

const DashboardJokePage = async () => {
  const jokes = await fetchJokes();

  return (
    <section>
      <h2 className="text-2xl font-semibold">Dashboard Page - Jokes</h2>
      <table className="mt-4">
        <tbody>
          {jokes.map((joke, idx) => (
            <tr key={joke.id}>
              <td className="p-4">{idx + 1}</td>
              <td className="p-4">
                {joke.type === 'single' ? (
                  joke.joke
                ) : (
                  <>
                    <p className="font-semibold">{joke.setup}</p>
                    <p className="text-gray-600">{joke.delivery}</p>
                  </>
                )}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </section>
  );
};

export default DashboardJokePage;