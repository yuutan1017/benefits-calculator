import React, { useState } from 'react';
import Image from 'next/image';
import axios from 'axios';
import { SubmitHandler, useForm } from 'react-hook-form';

import { ContactInputs } from '../types/type';
import { Loading } from '../components/Loading';

export default function Contact() {
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
    reset,
  } = useForm<ContactInputs>();

  const [open, setOpen] = useState<boolean>(false);
  const [visible, setVisible] = useState<boolean>(false);

  const onSubmitForm: SubmitHandler<ContactInputs> = async (data) => {
    let config = {
      method: 'post',
      url: `${process.env.NEXT_PUBLIC_API_URL}/api/contact`,
      headers: {
        'Content-Type': 'application/json',
      },
      data: data,
    };
    setVisible(true);
    const response = await axios(config);
    if (response) {
      reset();
      setOpen(true);
      setTimeout(() => {
        setOpen(false);
        setVisible(false);
      }, 5000);
    }
  };

  return (
    <>
      {open ? (
        <div className="items-center border-t-2 border-[#39497C] mb-10">
          <div className="mt-8 font-bold text-[#13184d]">
            <Image src="/image/sendMailIcon.jpeg" width={100} height={100} />
            <p>お問い合わせありがとうございます</p>
            <p className="text-xl">送信が成功しました</p>
          </div>
        </div>
      ) : (
        <section className="items-center border-t-2 border-[#39497C] mb-10">
          <div className="flex text-xl py-2 mt-10 ">
            <div className="font-bold text-yellow-500 mr-2">
              <span>||</span>
            </div>
            <h2>お問い合わせ/ご意見</h2>
          </div>
          <div className="text-left mt-2 mb-4 text-sm">
            <p>
              お問い合わせやご意見につきましては、以下のフォームよりお問い合わせ下さい。
            </p>
          </div>
          <div className={`${visible ? 'visible' : 'hidden'}`}>
            <Loading />
          </div>
          <form id="contact" onSubmit={handleSubmit(onSubmitForm)}>
            <div className="text-left mb-3 mt-2">
              <span className="font-bold text-red-500 text-xs">
                {errors.name && '※名前を入力してください'}
              </span>
              <input
                defaultValue=""
                type="text"
                placeholder="氏名"
                className="w-full px-2 py-1 placeholder-gray-300 border border-gray-400 bg-gray-100 rounded-md focus:outline-none"
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
                className="w-full px-2 py-1 placeholder-gray-300 border border-gray-400 bg-gray-100 rounded-md focus:outline-none"
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
                className="w-full px-2 py-1 placeholder-gray-300 border border-gray-400 bg-gray-100 rounded-md focus:outline-none"
                {...register('message', { required: true })}
              ></textarea>
            </div>
            <div>
              <button
                type="submit"
                className="w-full py-2 font-bold text-white bg-[#1E2678] rounded focus:outline-none"
              >
                送信する
              </button>
            </div>
          </form>
        </section>
      )}
    </>
  );
}
