import {Table, TableBody, TableCell, TableContainer, TableHead, TableRow } from '@mui/material'
import axios from 'axios'
import React, { useEffect, useState } from 'react'

const Home = () => {
    const [datas,setDatas] = useState([])

    useEffect(() =>{

        axios.get("https://jsonplaceholder.typicode.com/posts")
        .then((res) =>{
            setDatas(res.data)

        })
        .catch((err) =>{
            console.log(err)
        })

    })

  return (
    <div>
        <TableContainer>
            <Table>
                <TableHead>
                    <TableRow>
                        <TableCell style={{fontSize:"30px"}}>ID</TableCell>
                        <TableCell style={{fontSize:"30px"}}>TITLE</TableCell>
                    </TableRow>
                </TableHead>
                <TableBody>
                    {datas.map((val,index)=>{
                        return(
                            <TableRow key={index}>
                            <TableCell>{val.id}</TableCell>
                            <TableCell>{val.title}</TableCell>
                        </TableRow>
                         )

                    })}
                </TableBody>
            </Table>
        </TableContainer>

    </div>
  )
}

export default Home