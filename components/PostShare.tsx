"use client";

import React from "react";
import {
  FacebookShareButton,
  TwitterShareButton,
  FacebookIcon,
  TwitterIcon,
  FacebookShareCount,
  XIcon,
  WhatsappShareButton,
  WhatsappIcon,
} from "react-share";

const PostShare = ({
  title,
  shareUrl,
}: {
  title: string;
  shareUrl: string;
}) => {
  return (
    <div>
      <div className="share-buttons">
        <div className="countwtap">
          <div className="socialCount">0</div>
          <span className="socialTitle">Share</span>
        </div>
        <div className="shareWrap" >
          <div>
            <FacebookShareButton url={shareUrl} className="share-fb">
              <FacebookIcon size={32} round />
            </FacebookShareButton>
          </div>
          <div>
            <FacebookShareCount url={shareUrl} className="share-fb-count">
              {(count) => count}
            </FacebookShareCount>
          </div>

          <div>
            <TwitterShareButton url={shareUrl} title={title} className="share-x">
              <XIcon size={32} round />
            </TwitterShareButton>
          </div>

          <div>
            <WhatsappShareButton
              url={shareUrl}
              title={title}
              separator=":: "
              className="share-whatsapp"
            >
              <WhatsappIcon size={32} round />
            </WhatsappShareButton>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PostShare;
