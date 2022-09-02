import React, { useState } from 'react';
import axios from 'axios';
import { useForm, SubmitHandler } from 'react-hook-form';

import { Inputs } from '../types/type';

export default function Contact() {
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm<Inputs>();

  const onSubmitForm: SubmitHandler<Inputs> = async (data) => {
    // let config = {
    //   method: 'post',
    //   url: `${process.env.NEXT_PUBLIC_API_URL}/api/contact`,
    //   headers: {
    //     'Content-Type': 'application/json',
    //   },
    //   data: data,
    // };
    // const response = await axios(config);
    // console.log(response);
    console.log(data);
    console.log(watch('example'));
  };

  return (
    <section>
      <form onSubmit={handleSubmit(onSubmitForm)}>
        <div className="">
          <input {...register('example', { required: false })} type="text" />
          <button type="submit">Submit</button>
        </div>
      </form>
    </section>
  );
}
