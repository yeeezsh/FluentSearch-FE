import React from 'react';
import { HomeTempWrapper, ContentTempWrapper } from './styled';
import Image from 'next/image';
import Button from 'Components/Button';
import Link from 'next/link';

const HomePageTemp: React.FC = () => {
  return (
    <>
      <HomeTempWrapper>
        <ContentTempWrapper>
          <Image src="/assets/images/logo-home.svg" width={800} height={400} />
          <br />
          <Link href="/register">
            <a>
              <Button
                style={{
                  backgroundColor: 'white',
                  color: '#5A36CC',
                  padding: '15px 30px 15px 30px',
                }}>
                Get Started
              </Button>
            </a>
          </Link>
        </ContentTempWrapper>
      </HomeTempWrapper>
    </>
  );
};

export default HomePageTemp;
