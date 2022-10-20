import React, { useState } from 'react';
import Image from 'next/image';
import axios from 'axios';
import { SubmitHandler, useForm } from 'react-hook-form';

import { ContactInputs } from '../types/type';
import { Loading } from '../components/Loading';
import Link from 'next/link';

export default function Contact() {
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm<ContactInputs>();

  const [open, setOpen] = useState<boolean>(false);
  const [visible, setVisible] = useState<boolean>(false);

  const onSubmitForm: SubmitHandler<ContactInputs> = async (data) => {
    let config = {
      method: 'post',
      url: `${process.env.NEXT_PUBLIC_API_URL}api/contact`,
      headers: {
        'Content-Type': 'application/json',
      },
      data: data,
    };
    setVisible(true);
    const response = await axios(config);
    reset();
    setOpen(true);
    setTimeout(() => {
      setOpen(false);
      setVisible(false);
    }, 6000);
  };

  return (
    <>
      {open ? (
        <div className="items-center border-t-2 border-[#39497C] mb-10">
          <div className="mt-8 font-bold text-[#13184d]">
            <Image
              alt="sendMail"
              src="/images/sendMailIcon.jpeg"
              width={100}
              height={100}
            />
            <p>お問い合わせありがとうございます</p>
            <p className="text-xl">送信が成功しました</p>
          </div>
        </div>
      ) : (
        <section
          id="contact"
          className="items-center border-t-2 border-[#39497C] mb-10"
        >
          <div className="flex text-xl py-2 mt-10 ">
            <div className="border-b-8 border-yellow-500 rotate-90 w-7"></div>
            <h2>お問い合わせ/ご意見</h2>
          </div>
          <div className="text-left mt-8 mb-4 text-sm hover:text-blue-400">
            <Link
              href="https://profile-site-pearl.vercel.app/contact"
              passHref
              prefetch={false}
            >
              <a target="_blank">
                お問い合わせやご意見につきましては、こちらのサイトからご連絡お願い致します。
              </a>
            </Link>
            <br />
            <Link
              href="https://profile-site-pearl.vercel.app/contact"
              passHref
              prefetch={false}
            >
              <a target="_blank">
                https://profile-site-pearl.vercel.app/contact
              </a>
            </Link>
          </div>
        </section>
      )}
    </>
  );
}
