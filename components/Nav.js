/* eslint-disable jsx-a11y/anchor-is-valid */
import * as React from 'react';
import Box from '@mui/material/Box';
import Link from '@mui/material/Link';
import NextLink from "next/link";
import { styled } from "@nextui-org/react"

const preventDefault = (event) => event.preventDefault();

export default function Nav() {
  return (
    <Box
    sx={{
      boxSizing: "border-box"
      
    
          }}
      onClick={preventDefault}
    >
        <Link as={NextLink} href='/' >О нас</Link>
        <Link as={NextLink}  href='/second'>Преподаватели</Link>
        <Link as={NextLink}  href='/third'>Мероприятия</Link>
        <Link as={NextLink}  href='/fouth'>Галерея</Link>
        <Link as={NextLink}  href='/fifth'>Расписание</Link>
       </Box>
  );
}
