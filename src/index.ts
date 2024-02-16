import express, { Request, Response } from "express";
import cors from "cors";
const app = express();
app.use(cors());
app.use(express.json());

interface SumRequest extends Request {
  firstNum: number;
  secondNum: number;
}

app.get("/sum", (req: SumRequest, res: any) => {
  const { firstNum, secondNum } = req.body;
  const sum = Number(firstNum) + Number(secondNum);

  res.json({
    msg: sum,
  });
});

app.listen(3000, () => {
  console.log("app is listening at port 3000");
});
