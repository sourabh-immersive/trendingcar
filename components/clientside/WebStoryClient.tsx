"use client";

import { useState } from "react";
import Image from "next/image";

interface Post {
  title: string;
  content: string;
  date: string;
  featuredImage: string;
}

interface ClientComponentProps {
  initialData: any;
}

const WebStoryClient: React.FC<ClientComponentProps> = ({ initialData }) => {
  const [post, setPost] = useState(initialData);
//   const { title, content } = post[0];
//   console.log('ssss', post.content);
  return (
    <div>
        <style global jsx>{`
        .main-footer, .container.adrow, .breadcrumb__row, .main-header {
          display: none;
        }.main-layout {
            padding-bottom: 0px;
        }
      `}</style>
      <iframe src={post.content} style={{height:'100vh', width:'100%'}} title="Iframe Example"></iframe>
    </div>
  );
};

export default WebStoryClient;
