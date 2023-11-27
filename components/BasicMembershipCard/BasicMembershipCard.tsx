import { Button, Typography, CircularProgress } from '@mui/material'
import React from 'react'
import useCreateStripeCheckOutSession from 'hooks/stripe/useCreateStripeCheckOutSession'

import { withApollo } from 'lib/apollo/withApollo'
import { useRouter } from 'next/navigation'

const BasicMembershipCard = ({ monthlyPlan, yearlyPlan }: any) => {
  const [createStripeCheckoutSession, loadingCheckoutSession] = useCreateStripeCheckOutSession()
  const router = useRouter()
  const handleBasicMembership = async (planId: string) => {
    console.log('useStripeMembershipPlans  planId is ', planId)
    try {
      //@ts-ignore
      const membership = await createStripeCheckoutSession({
        variables: {
          priceId: planId,
          quantity: 1,
          mode: 'subscription',
          subscriptionType: 'Basic',
        },
      })

      console.log('membership is ', membership)

      if (membership?.data?.createStripeCheckOutSession?.status) {
        console.log('coming to success console')
        const url = membership?.data?.createStripeCheckOutSession?.stripeData
        window.location.href = url
      }
    } catch (err) {
      console.error(err)
    }
  }

  console.log('useStripeMembershipPlans basicMonthlyPlan', monthlyPlan)
  console.log('useStripeMembershipPlans basicYearlyPlan', yearlyPlan)

  return (
    <div
      className='w-full relative h-full'
      style={{
        background: '#fff',
        boxShadow: '0px 1px 30px 0px rgba(0, 0, 0, 0.15)',
      }}
    >
      <div className='w-full absolute flex justify-center -mt-[110px] md:-mt-[85px]'>
        <img src='/Images/donut-2.png' alt='donut-2' />
      </div>

      <div
        style={{
          backgroundImage: `url("/Images/membership-card2.png")`,
          backgroundRepeat: 'no-repeat',
          backgroundSize: '100% 100%',
          backgroundPosition: 'center',
        }}
        className='h-[350px] md:h-[400px] flex flex-col items-center justify-center'
      >
        <div>
          <Typography
            sx={{
              fontSize: '26px !important',
              fontWeight: '600 !important',
              fontFamily: 'Josefin Sans',
              lineHeight: 'normal',
              color: '#090909',
              textAlign: 'center',
              textTransform: 'uppercase',
              '@media (max-width: 767px)': {
                fontSize: '18px !important',
              },
            }}
          >
            basic Membership
          </Typography>
        </div>

        <div className='w-[80%]'>
          <Typography
            sx={{
              marginTop: '12px',
              fontSize: '18px !important',
              fontWeight: '500 !important',
              fontFamily: 'Open Sans',
              lineHeight: 'normal',
              color: '#000',
              textAlign: 'center',
              // textTransform: 'uppercase',
              '@media (max-width: 767px)': {
                marginTop: '7px',
                fontSize: '18px !important',
              },
            }}
          >
            {`Already have a website or method for receiving orders but looking to grow your customer reach?`}
          </Typography>
        </div>
      </div>

      <div className='px-[30px] md:px-[60px] pb-[36px] -mt-[25px]'>
        <div className='w-full'>
          <Typography
            sx={{
              fontSize: '26px !important',
              fontWeight: '400 !important',
              fontFamily: 'Josefin Sans',
              lineHeight: '30px',
              color: '#7DDEC1',
              textTransform: 'capitalize',
              '@media (max-width: 767px)': {
                fontSize: '24px !important',
              },
            }}
          >
            basic
          </Typography>

          <Typography
            sx={{
              marginTop: '14px',
              fontSize: '60px !important',
              fontWeight: '400 !important',
              fontFamily: 'Josefin Sans',
              color: '#090909',
              display: 'flex',
              alignItems: 'end',
              // textTransform: 'capitalize',
              '@media (max-width: 767px)': {
                marginTop: '12px',
                fontSize: '36px !important',
              },
            }}
          >
            ${monthlyPlan?.length > 0 ? monthlyPlan[0]?.unit_amount : '11'}{' '}
            <span
              style={{
                fontSize: '22px',
              }}
            >
              / month
            </span>
          </Typography>

          <Typography
            sx={{
              marginTop: '18px',
              fontSize: '16px !important',
              fontWeight: '400 !important',
              fontFamily: 'Open Sans',
              color: '#090909',
              lineHeight: '24px',
              // textTransform: 'capitalize',
              '@media (max-width: 767px)': {
                marginTop: '16px',
                fontSize: '12px !important',
              },
            }}
          >
            The Basic Membership may be best for you!
          </Typography>

          <div className='mt-[33px] md:mt-[52px] flex justify-between'>
            <div className='w-[48%]'>
              <Button
                disableElevation
                type='button'
                sx={{
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  cursor: 'pointer',
                  width: '100%',
                  height: '50px',
                  textTransform: 'capitalize',
                  backgroundColor: '#7DDEC1',
                  borderRadius: '38px',
                  padding: '10px',
                  color: '#000',
                  '&:hover': {
                    backgroundColor: '#7DDEC1',
                    opacity: '0.8',
                    color: '#000',
                  },
                }}
                // onClick={handleClick}
              >
                {
                  <Typography className='text-black group-hover:text-white'>{`Learn more`}</Typography>
                }
              </Button>
            </div>

            <div className='w-[48%]'>
              <Button
                disableElevation
                //@ts-ignore
                disabled={loadingCheckoutSession}
                type='button'
                sx={{
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  cursor: 'pointer',
                  width: '100%',
                  height: '50px',
                  textTransform: 'capitalize',
                  backgroundColor: '#fff',
                  borderRadius: '38px',
                  border: '1px solid #7DDEC1',
                  padding: '10px',
                  color: '#000',
                  '&:hover': {
                    backgroundColor: '#F8B4CB',
                    color: '#fff',
                  },
                }}
                onClick={() => handleBasicMembership(monthlyPlan[0]?.planId)}
              >
                {loadingCheckoutSession ? (
                  <CircularProgress
                    sx={{
                      color: 'grey',
                      width: '20px !important',
                      height: '20px !important',
                    }}
                  />
                ) : (
                  <Typography className='text-black group-hover:text-white'>
                    {'join now'}
                  </Typography>
                )}
              </Button>
            </div>
          </div>

          <div className='mt-[12px] md:mt-[28px] bg-[#6C6C6C] h-[1px] opacity-[0.5]' />

          <Typography
            sx={{
              marginTop: '20px',
              fontSize: '60px !important',
              fontWeight: '400 !important',
              fontFamily: 'Josefin Sans',
              color: '#090909',
              display: 'flex',
              alignItems: 'end',
              // textTransform: 'capitalize',
              '@media (max-width: 767px)': {
                marginTop: '12px',
                fontSize: '36px !important',
              },
            }}
          >
            ${yearlyPlan?.length > 0 ? yearlyPlan[0].unit_amount : ''}{' '}
            <span
              style={{
                fontSize: '22px',
              }}
            >
              / annual
            </span>
          </Typography>

          <Typography
            sx={{
              marginTop: '20px',
              fontSize: '16px !important',
              fontWeight: '400 !important',
              fontFamily: 'Open Sans',
              color: '#090909',
              lineHeight: '24px',
              // textTransform: 'capitalize',
              '@media (max-width: 767px)': {
                marginTop: '12px',
                fontSize: '12px !important',
              },
            }}
          >
            Join annually and get{' '}
            <span
              style={{
                fontSize: '18px',
                fontWeight: '600',
              }}
            >
              2 months free!
            </span>
          </Typography>
        </div>

        <div className='mt-[33px] md:mt-[52px] flex justify-between'>
          <div className='w-[48%]'>
            <Button
              disableElevation
              type='button'
              sx={{
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                cursor: 'pointer',
                width: '100%',
                height: '50px',
                textTransform: 'capitalize',
                backgroundColor: '#7DDEC1',
                borderRadius: '38px',
                padding: '10px',
                color: '#000',
                '&:hover': {
                  backgroundColor: '#7DDEC1',
                  opacity: '0.8',
                  color: '#000',
                },
              }}
              // onClick={handleClick}
            >
              {
                <Typography className='text-black group-hover:text-white'>{`Learn more`}</Typography>
              }
            </Button>
          </div>

          <div className='w-[48%]'>
            <Button
              disableElevation
              //@ts-ignore
              disabled={loadingCheckoutSession}
              type='button'
              sx={{
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                cursor: 'pointer',
                width: '100%',
                height: '50px',
                textTransform: 'capitalize',
                backgroundColor: '#fff',
                borderRadius: '38px',
                border: '1px solid #7DDEC1',
                padding: '10px',
                color: '#000',
                '&:hover': {
                  backgroundColor: '#F8B4CB',
                  color: '#fff',
                },
              }}
              onClick={() => handleBasicMembership(yearlyPlan[0]?.planId)}
            >
              {loadingCheckoutSession ? (
                <CircularProgress
                  sx={{
                    color: 'grey',
                    width: '20px !important',
                    height: '20px !important',
                  }}
                />
              ) : (
                <Typography className='text-black group-hover:text-white'>{'join now'}</Typography>
              )}
            </Button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default withApollo()(BasicMembershipCard)
