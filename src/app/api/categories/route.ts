export const config = {
  api: {
    bodyParser: false,
  },
};

export async function POST(req: Request) {
  console.log(req);
}
