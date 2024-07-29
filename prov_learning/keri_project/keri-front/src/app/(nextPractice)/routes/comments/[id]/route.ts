import { cookies } from "next/headers";
import { comments } from "../data"

export async function GET(request:Request, {params}:{params:{id:string}}) {


    const id = params.id
    const queryComment = comments.find((comment)=> comment.id === parseInt(id));
    return  Response.json(queryComment);
    
}

export async function PATCH(request:Request, {params}:{params:{id:string}}) {
    const id = params.id;
    const body = await request.json();
    const {name} = body;

    const index = comments.findIndex((comment)=>comment.id === parseInt(id));
    
    if(index > -1){
        comments[index].name = name;
        return new Response(JSON.stringify(name),{
            "status": 200,
        })
    }else{
        return new Response("not found",{
            status: 404,
        })
    }
    
}

export async function DELETE(request:Request,{params}:{params:{id:string}}) {
    const id = params.id;
    const index = comments.findIndex((comment)=>comment.id === parseInt(id));
    if(index > -1){
        comments.splice(index,1);
        return new Response("deleted",{
         "status": 200,   
        })    
    }
    else{
        return new Response("Not found ",{
            "status": 404,
        })
    }
    
    
}