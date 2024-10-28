export default async function ({ appFound }: { appFound: any }) {
  return (
    <footer
      className="p-12"
      style={{ backgroundColor: appFound.primaryColor, color: "#fff" }}
    ></footer>
  );
}
