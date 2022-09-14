import React from 'react';
import axios from 'axios';
import { SubmitHandler, useForm } from 'react-hook-form';

import { ContactInputs } from '../types/type';

export default function Contact() {
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm<ContactInputs>();

  const onSubmitForm: SubmitHandler<ContactInputs> = async (data) => {
    let config = {
      method: 'post',
      url: `${process.env.NEXT_PUBLIC_API_URL}/api/contact`,
      headers: {
        'Content-Type': 'application/json',
      },
      data: data,
    };
    const response = await axios(config);
    // console.log(response.data);
  };

  return (
    <>
      <div className="flex flex-row items-center border-t-2 border-[#39497C] mt-14">
        <span className="font-bold text-xl mr-2 mt-8 text-yellow-500">||</span>
        <h2 className="mt-8 text-xl">お問い合わせ</h2>
      </div>
      <form id='contact' onSubmit={handleSubmit(onSubmitForm)}>
        <div className="text-left mt-5">
          <span className="font-bold text-red-500 text-xs">
            {errors.name && '※名前を入力してください'}
          </span>
          <input
            defaultValue=""
            type="text"
            placeholder="氏名"
            className="w-full mb-4 px-2 py-2 placeholder-gray-400 border border-gray-300 bg-gray-100 rounded-md"
            {...register('name', { required: true })}
          />
        </div>

        <div className="text-left">
          <div className="text-justify">
            <span className="font-bold text-red-400 text-xs">
              {errors.email && '※メールアドレスを入力してください'}
            </span>
          </div>
          <input
            defaultValue=""
            type="email"
            placeholder="メールアドレス"
            className="w-full mb-4 px-2 py-2 placeholder-gray-400 border border-gray-300 bg-gray-100 rounded-md"
            {...register('email', { required: true })}
          />
        </div>

        <div className="text-left">
          <div className="text-justify">
            <span className="font-bold text-red-400 text-xs">
              {errors.message && '※本文を入力してください'}
            </span>
          </div>
          <textarea
            defaultValue=""
            rows={3}
            placeholder="お問い合わせ内容"
            className="w-full mb-2 px-2 py-2 placeholder-gray-400 border border-gray-300 bg-gray-100 rounded-md"
            {...register('message', { required: true })}
          ></textarea>

          <button
            type="submit"
            className="w-full py-2 font-bold text-white bg-[#1E2678] rounded focus:outline-none mb-10"
          >
            送信する
          </button>
        </div>
      </form>
    </>
  );
}
