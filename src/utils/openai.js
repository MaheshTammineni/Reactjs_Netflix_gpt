import OpenAI from 'openai';
import { OPENAI_KEY } from './constants';

const openai = new OpenAI({  //initialize openAI it is king of like authorization happening here
  apiKey: OPENAI_KEY, 
  dangerouslyAllowBrowser: true
  // defaults to process.env["OPENAI_API_KEY"]
});



export default openai;