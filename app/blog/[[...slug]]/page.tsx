type Props = {
  params: Promise<{ slug?: string[] }>;
};

export default async function BlogPage({ params }: Props) {
  const { slug } = await params;
  const pathString = slug ? slug.join('/') : '';

  return (
    <main>
      <h1>You visited: /{pathString}</h1>
    </main>
  );
}
