import axios from "axios";
import Koa from "koa";
import config from "../../config";

export const getAnswersForChatBox = async (ctx: Koa.Context) => {
  try {
    const { userQuestion } = ctx.request.body as { userQuestion: string };
    const apiKey = config.HUGGINGFACE_API_KEY;

    const categories = [
      "your name",
      "technical skills",
      "soft skills",
      "education",
      "work experience",
      "who you are",
      "strength",
      "weakness",
      "developer experience",
      "project",
    ];

    const response = await axios.post(
      "https://api-inference.huggingface.co/models/facebook/bart-large-mnli",
      {
        inputs: userQuestion,
        parameters: {
          candidate_labels: categories,
        },
      },
      {
        headers: {
          Authorization: `Bearer ${apiKey}`,
        },
      }
    );

    const { labels, scores } = response.data;
    const topLabel = labels[0];
    const topScore = scores[0];

    const threshold = 0.2;
    if (topScore < threshold) {
      return (ctx.body = { category: "unknown" });
    }

    return (ctx.body = { category: topLabel });
  } catch (err: any) {
    console.error(err.response?.data || err.message);
  }
};
