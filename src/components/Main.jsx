import React from 'react';

import { Link } from 'react-router-dom';
import styled from 'styled-components';
import { BsThreeDots } from 'react-icons/bs';
import {
  AiOutlineLike,
  AiOutlineComment,
  AiOutlineShareAlt,
  AiOutlineSend,
} from 'react-icons/ai';
import {
  MdInsertPhoto,
  MdFeaturedVideo,
  MdEventAvailable,
  MdArticle,
} from 'react-icons/md';
import PostModal from './PostModal';

const Main = () => {
  return (
    <Container>
      <ShareBox>
        Share
        <div>
          <img className='user-image' src='images/user.svg' alt='' />
          <button>Start a post</button>
        </div>
        <div>
          <button>
            <MdInsertPhoto size={24} className='icon' />
            <span>Photo</span>
          </button>

          <button>
            <MdFeaturedVideo size={24} className='icon' />
            <span>Video</span>
          </button>

          <button>
            <MdEventAvailable size={24} className='icon' />
            <span>Event</span>
          </button>

          <button>
            <MdArticle size={24} className='icon' />
            <span>Write article</span>
          </button>
        </div>
      </ShareBox>
      <div>
        <Article>
          <SharedActor>
            <Link to=''>
              <img src='/images/user.svg' alt='' />
              <div>
                <span>Title</span>
                <span>Info</span>
                <span>Date</span>
              </div>
            </Link>
            <button>
              <BsThreeDots size={24} />
            </button>
          </SharedActor>

          <Description>Description</Description>

          <SharedImg>
            <Link to=''>
              <img src='/images/shared-image.jfif' alt='' />
            </Link>
          </SharedImg>

          <SocialCounts>
            <li>
              <button>
                <img src='/images/like-icon.png' alt='' />
                <img src='/images/clap-icon.png' alt='' />
                <span>75</span>
              </button>
            </li>

            <li>
              <Link to=''>2 comments</Link>
            </li>
          </SocialCounts>

          <SocialActions>
            <button>
              <AiOutlineLike className='icon' />
              <span>Like</span>
            </button>
            <button>
              <AiOutlineComment className='icon' />
              <span>Comments</span>
            </button>
            <button>
              <AiOutlineShareAlt className='icon' />
              <span>Share</span>
            </button>
            <button>
              <AiOutlineSend className='icon' />
              <span>Send</span>
            </button>
          </SocialActions>
        </Article>
      </div>
      <PostModal />
    </Container>
  );
};

export default Main;

const Container = styled.div`
  grid-area: main;
`;

const CommonCard = styled.div`
  text-align: center;
  overflow: hidden;
  margin-bottom: 8px;
  background-color: #fff;
  border-radius: 5px;
  position: relative;
  border: none;
  box-shadow: 0 0 0 1px rgb(0 0 0 /15%), 0 0 0 rgb(0 0 0 / 20%);
`;

const ShareBox = styled(CommonCard)`
  display: flex;
  flex-direction: column;
  color: #958b95;
  margin: 0 0 8px;
  background: white;

  div {
    button {
      outline: none;
      color: rgba(0, 0, 0, 0.6);
      font-size: 14px;
      line-height: 1.5;
      min-height: 48px;
      background: transparent;
      border: none;
      display: flex;
      align-items: center;
      font-weight: 600;
    }

    &:first-child {
      display: flex;
      align-items: center;
      padding: 8px 16px 0px 16px;

      .user-image {
        width: 48px;
        border-radius: 50%;
        margin-right: 8px;
      }

      button {
        margin: 4px 0;
        flex-grow: 1;
        border-radius: 35px;
        padding-left: 16px;
        border: 1px solid rgba(0, 0, 0, 0.15);
        background-color: white;
        text-align: left;
      }
    }

    &:nth-child(2) {
      display: flex;
      flex-wrap: wrap;
      justify-content: space-around;
      padding-bottom: 4px;

      button {
        .icon {
          margin: 0 4px 0 -2px;
        }
        span {
          color: #70b5f9;
        }
      }
    }
  }
`;

const Article = styled(CommonCard)`
  padding: 0;
  margin: 0 0 8px;
  overflow: visible;
`;

const SharedActor = styled.div`
  flex-wrap: nowrap;
  padding: 12px 14px 0;
  margin-bottom: 8px;
  align-items: center;
  display: flex;

  a {
    margin-right: 12px;
    flex-grow: 1;
    overflow: hidden;
    display: flex;
    text-decoration: none;

    img {
      width: 48px;
      height: 48px;
    }

    div {
      display: flex;
      flex-direction: column;
      flex-grow: 1;
      flex-basis: 0;
      margin-left: 8px;
      overflow: hidden;

      span {
        text-align: left;

        &:first-child {
          font-size: 14px;
          font-weight: 700;
          color: rgba(0, 0, 0, 1);
        }

        &:nth-child(n + 1) {
          font-size: 12px;
          color: rgba(0, 0, 0, 0.6);
        }
      }
    }
  }

  button {
    position: absolute;
    right: 12px;
    top: 0;
    background: transparent;
    border: none;
    outline: none;
  }
`;

const Description = styled.div`
  padding: 0 15px;
  overflow: hidden;
  color: rgba(0, 0, 0, 0.9);
  font-size: 14px;
  text-align: left;
`;

const SharedImg = styled.div`
  margin-top: 8px;
  width: 100%;
  display: block;
  position: relative;
  background: #f9fafb;
  img {
    object-fit: contain;
    width: 100%;
    height: 100%;
  }
`;

const SocialCounts = styled.ul`
  line-height: 1.3;
  display: flex;
  align-items: flex-start;
  margin: 0 16px;
  padding: 8px 0;
  border-bottom: 1px solid #e9e5df;
  list-style: none;

  a {
    text-decoration: none;
    color: black;
  }

  li {
    margin-right: 5px;
    font-size: 12px;

    button {
      display: flex;
      border: none;
      background: white;
    }
  }
  img {
    width: 18px;
  }
`;

const SocialActions = styled.div`
  align-items: center;
  display: flex;
  justify-content: flex-start;
  margin: 0;
  min-height: 40px;
  padding: 4px 8px;
  button {
    display: inline-flex;
    align-items: center;
    padding: 8px;
    color: #0a66c2;
    border: none;
    background: white;
    cursor: pointer;

    @media (min-width: 768px) {
      span {
        margin-left: 8px;
      }
    }
  }
`;
