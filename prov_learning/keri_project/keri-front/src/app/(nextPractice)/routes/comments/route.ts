import { headers } from "next/headers";
import { comments } from "./data"
import { NextRequest } from "next/server";

export async function GET(request:NextRequest) {
    const searchParams = request.nextUrl.searchParams;
   
    const query = searchParams.get("query");
    const filteredComments = query ?  comments.filter(comment=>
        comment.name.toLowerCase().includes(query)
    )  : comments;
    console.log(filteredComments)
    return  Response.json(filteredComments);
    
    
}

export async function POST(request: Request) {
    const body = await request.json();
    const newComment = {
        id: comments.length + 1,
        name: body.name
      }
      comments.push(newComment);
    return new Response(JSON.stringify(newComment),{
      headers :{
        "Content-Type": "application/json",
     
      },
      "status": 201,
    }
    );
}