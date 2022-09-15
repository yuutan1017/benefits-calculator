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
    <section>
      <div className="items-center border-t-2 border-[#39497C]">
        <div className="flex text-xl py-2 mt-8 mb-3">
          <div className="font-bold text-yellow-500 mr-2">
            <span>||</span>
          </div>
          <h2>お問い合わせ</h2>
        </div>
      </div>
      <form id="contact" onSubmit={handleSubmit(onSubmitForm)}>
        <div className="text-left mb-3">
          <span className="font-bold text-red-500 text-xs">
            {errors.name && '※名前を入力してください'}
          </span>
          <input
            defaultValue=""
            type="text"
            placeholder="氏名"
            className="w-full px-2 py-1 placeholder-gray-300 border border-gray-400 bg-gray-100 rounded-md"
            {...register('name', { required: true })}
          />
        </div>

        <div className="text-left mb-3">
          <div className="text-justify">
            <span className="font-bold text-red-400 text-xs">
              {errors.email && '※メールアドレスを入力してください'}
            </span>
          </div>
          <input
            defaultValue=""
            type="email"
            placeholder="メールアドレス"
            className="w-full px-2 py-1 placeholder-gray-300 border border-gray-400 bg-gray-100 rounded-md"
            {...register('email', { required: true })}
          />
        </div>

        <div className="text-left mb-3">
          <div className="text-justify">
            <span className="font-bold text-red-400 text-xs">
              {errors.message && '※本文を入力してください'}
            </span>
          </div>
          <textarea
            defaultValue=""
            rows={5}
            placeholder="お問い合わせ内容"
            className="w-full px-2 py-1 placeholder-gray-300 border border-gray-400 bg-gray-100 rounded-md"
            {...register('message', { required: true })}
          ></textarea>
        </div>
        <div className="mb-8">
          <button
            type="submit"
            className="w-full py-2 font-bold text-white bg-[#1E2678] rounded focus:outline-none"
          >
            送信する
          </button>
        </div>
      </form>
    </section>
  );
}
