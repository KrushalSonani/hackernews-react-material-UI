import React from "react";
import timeago from "epoch-timeago";
import { Link, Paper, Table, TableCell, TableContainer, TableRow, Tooltip } from "@mui/material";
import ArrowDropUpIcon from '@mui/icons-material/ArrowDropUp';
import PersonOutlineIcon from '@mui/icons-material/PersonOutline';
import LinkIcon from '@mui/icons-material/Link';
import AccessTimeIcon from '@mui/icons-material/AccessTime';
import CommentOutlinedIcon from '@mui/icons-material/CommentOutlined';
import InfoOutlinedIcon from '@mui/icons-material/InfoOutlined';
import { SOURCEURL } from "../utils";

export const Stories = ({ state }) => {

    const redirectToSouce = (url) => {
        window.open(url, '_blank')
    }

    const getURL = (url) => {
        return url?.replace("http://", "")?.replace("https://", "")?.split(/[/?#]/)[0]?.replace("www.", "")
    }

    return (
        <TableContainer component={Paper}>
            <Table sx={{ minWidth: 650 }} aria-label="simple table">

                {state?.map(
                    ({ item, text, author, title, score, comments_count, time, url }) => (
                        <TableRow key={item} sx={{ '&:last-child td': { border: 0 } }}>
                            <TableCell >
                                <span className="d_flex">
                                    <Tooltip title='Vote' className='cp' >
                                        <ArrowDropUpIcon fontSize="large" />
                                    </Tooltip>
                                    <Tooltip title='Score' >
                                        <span className="cp">{score}</span>
                                    </Tooltip>
                                </span>

                            </TableCell>
                            <TableCell >
                                <span style={{ color: "#828282" }} className="d_i_flex">
                                    <Link underline="none" href={url} target="_blank" rel="noopener noreferrer">
                                        {title}
                                    </Link>
                                    {
                                        text?.length > 1 && <Tooltip title={text} >
                                        <InfoOutlinedIcon fontSize="small" className="p-l-5 cp" />
                                        </Tooltip>
                                    }
                                  
                                </span>
                                <br />
                                <TableRow>
                                    <span style={{ color: "#828282" }} className="d_flex">
                                        <Tooltip title='Auther' >
                                            <span className='d_flex p-t-10 cp p-l-5'>

                                                <PersonOutlineIcon fontSize="small" />

                                                <Link color='inherit' underline="none"
                                                    href={`${SOURCEURL}/user?id=${author}`}
                                                    target="_blank"
                                                    rel="noopener noreferrer"
                                                >
                                                    {author}
                                                </Link>
                                            </span>
                                        </Tooltip>
                                        <Tooltip title='Comment'>
                                            <span className='d_flex p-t-10 cp p-l-5'>

                                                <CommentOutlinedIcon fontSize="small" />

                                                <Link underline="none" className="p-l-5"
                                                    href={`${SOURCEURL}/item?id=${item}`}
                                                    target="_blank"
                                                    style={{ color: "#828282" }}
                                                    rel="noopener noreferrer"
                                                >
                                                    {comments_count}
                                                </Link>
                                            </span>
                                        </Tooltip>
                                    </span>

                                </TableRow>
                            </TableCell>

                            <TableCell style={{ color: "#828282" }}>
                                <span className='d_flex' onClick={() => redirectToSouce(url)} >
                                    <LinkIcon />
                                    <Link className='cp' className="p-l-5">
                                        {getURL(url)}
                                    </Link>
                                </span>
                            </TableCell>
                            <TableCell style={{ color: "#828282" }}>
                                <span className='d_flex'>
                                    <AccessTimeIcon fontSize="small"/> 
                                    <p className="p-r-5">{timeago(time * 1000)}</p>
                                </span>
                            </TableCell>

                        </TableRow>
                    )
                )}
            </Table>
        </TableContainer>
    );
};