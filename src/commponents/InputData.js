import { Box, Button, TextField } from '@mui/material'
import React, { useState } from 'react'
import { appendErrors, useForm } from 'react-hook-form'
import { Link } from 'react-router-dom';

export default function InputData() {
    const { register, handleSubmit, formState: { errors }, watch } = useForm();
    let playerList = JSON.parse(localStorage.getItem('playerList'));
    const onSubmit = (data) => {
        data.total = Number(data.stamina) + Number(data.response) + Number(data.focusOnGame) + Number(data.clean) + Number(data.stressHandler);
        if (!errors) {
            if (!playerList) {
                playerList = []
            }
            const newData2 = playerList;
            newData2.push(data)
            localStorage.setItem('playersList', JSON.stringify(newData2));
            console.log(newData2);
            console.log("players-->", playerList)
        }
    }
    return (
        <>
            <form onSubmit={handleSubmit(onSubmit)} action="#">
                <div>
                    <TextField label="Name" variant="outlined" {...register('name', { required: "name is required" })} />
                    <p style={{ color: "red" }}>{errors.name?.message}</p>
                </div><div>
                    <TextField label="stamina" variant="outlined" {...register('stamina', {
                        required: true, pattern: {
                            value: /^[0-5]$/,
                            message: "enter below 5",
                        },
                    })} />
                    <p style={{ color: "red" }}>{errors.stamina?.message}</p>
                </div><div>
                    <TextField label="response" variant="outlined" {...register('response', {
                        required: true, pattern: {
                            value: /^[0-5]$/,
                            message: "enter below 5",
                        },
                    })} />
                    <p style={{ color: "red" }}>{errors.response?.message}</p>
                </div><div>
                    <TextField label="focusOnGame" variant="outlined" {...register('focusOnGame', {
                        required: true, pattern: {
                            value: /^[0-5]$/,
                            message: "enter below 5",
                        },
                    })} />
                    <p style={{ color: "red" }}>{errors.focusOnGame?.message}</p>
                </div><div>
                    <TextField label="clean" variant="outlined" {...register('clean', {
                        required: true, pattern: {
                            value: /^[0-5]$/,
                            message: "enter below 5",
                        },
                    })} />
                    <p style={{ color: "red" }}>{errors.clean?.message}</p>
                </div><div>
                    <TextField label="stressHandler" variant="outlined" {...register('stressHandler', {
                        required: true, pattern: {
                            value: /^[0-5]$/,
                            message: "enter below 5",
                        },
                    })} />
                    <p style={{ color: "red" }}>{errors.stressHandler?.message}</p>
                </div>
                <div>
                    <Button variant="outlined" type="submit">Submit</Button>
                    <Link to="/divide"><Button variant="outlined">divide</Button></Link>
                </div>
            </form>
        </>

    )
}