import React from 'react';
import Link from 'next/link';
import axios from 'axios';
import { SubmitHandler, useForm } from 'react-hook-form';

import { ContactInputs } from '../types/type';
import { Layout } from '../components/Layout';

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
      <div className="flex flex-row items-center border-t-2 border-[#39497C]">
        <span className="font-bold text-xl mr-2 mt-8 text-yellow-500">
          ||
        </span>
        <h2 className="mt-8 text-xl">お問い合わせ</h2>
      </div>
      <form onSubmit={handleSubmit(onSubmitForm)}>
        <div className="text-left mt-8">
          <label className="">
            氏名
            <span className="text-xs text-red-500">(必須)</span>
          </label>
          <input
            defaultValue=""
            type="text"
            placeholder="例）氏名"
            className={`w-full px-2 py-2 placeholder-gray-300 border-2 border-gray-400 rounded-md focus:outline-none focus:ring focus:ring-indigo-100 focus:border-indigo-300 ${
              errors.name ? 'focus:ring-red-600' : null
            }`}
            {...register('name', { required: true })}
          />
          <div className="text-justify">
            <span className="font-bold text-red-500 text-xs">
              {errors.name && '※名前を入力してください'}
            </span>
          </div>
        </div>

        <div className="text-left">
          <label className="text-gray-600 text-base">
            メールアドレス
            <span className="text-xs text-red-500">(必須)</span>
          </label>
          <input
            defaultValue=""
            type="email"
            placeholder="例）your@example.com"
            className={`
            w-full px-2 py-2 placeholder-gray-300 border border-gray-300 
            rounded-md focus:outline-none focus:ring focus:ring-indigo-100 focus:border-indigo-300 ${
              errors.email ? 'focus:ring-red-600' : null
            }`}
            {...register('email', { required: true })}
          />
          <div className="text-justify">
            <span className="font-bold text-red-400 text-xs">
              {errors.email && '※メールアドレスを入力してください'}
            </span>
          </div>
        </div>

        <div className="text-left">
          <label className="block mb-2 text-sm text-gray-600">
            お問合せ内容
            <span className="text-xs text-red-500">(必須)</span>
          </label>
          <textarea
            defaultValue=""
            rows={3}
            placeholder="お問い合わせ内容です"
            className={`
            w-full px-2 py-2 placeholder-gray-300 border border-gray-300 
            rounded-md focus:outline-none focus:ring focus:ring-indigo-100 focus:border-indigo-300 ${
              errors.message ? 'focus:ring-red-600' : null
            }`}
            {...register('message', { required: true })}
          ></textarea>
          <div className="text-justify">
            <span className="font-bold text-red-400 text-xs">
              {errors.message && '※本文を入力してください'}
            </span>
          </div>
          <button
            type="submit"
            className="w-full md:mt-6 md:my-0 my-3 py-4 font-bold
                 text-white bg-[#1E2678] rounded-md focus:outline-none"
          >
            送信する
          </button>
        </div>
      </form>
    </>
  );
}
