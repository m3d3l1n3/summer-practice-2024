import React from "react"
import Link from "next/link"

async function GetGroupData(){
    const res = await fetch("http://127.0.0.1:8090/api/collections/groups/records?page=1&perPage=10", {cache: 'no-store'});
    const data = await res.json();
    return data?.items as any[];
}

export default async function GroupData(){
    const data = await GetGroupData()
    return(
        <p>
            {data?.map((item)=> {return <Item item = {item} />})}
        </p>
    )
}

export function Item({item}: any){
    const {id, groupname,groupimage} = item ||[];
    return(<Item><h2>{id}</h2><h2>{groupname}</h2></Item>)
}