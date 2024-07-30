import styled, { keyframes } from "styled-components";

const fadeInOut = keyframes`
  0% {
    opacity: 0;
    transform: translateY(-0.625rem);
  }
  50% {
    opacity: 1;
    transform: translateY(0);
  }
  100%{
    opacity: 0;
    transform: translateY(-0.625rem);
  }
 
`;

export const NotificationsContainer = styled.div`
  width: 100%;

  @media screen and (min-width: 90em) {
    max-width: 87rem;
    margin: 0 auto;
  }
`;

export const Table = styled.table`
  border-collapse: collapse;
  width: 87%;
  margin: auto;
  border-spacing: 0;

  /* & > thead{
    & > tr{
      display: flex;
    }
  } */

  th,
  td {
    font-size: 0.6875rem;
    padding: 0.5rem;
    text-align: left;

    @media (max-width: 43.75em) {
      padding: 0.3rem;
      font-size: 0.5rem;
    }
  }

  th {
    background-color: rgb(var(--color-light-grey));
    text-transform: uppercase;
    font-weight: 400;
  }

  td {
    text-transform: capitalize;
  }
`;

export const NotificationHeader = styled.div`
  display: flex;
  margin: auto;
  width: 87%;
  margin-top: 0.9375rem;
  align-items: center;

  & > h1 {
    text-transform: uppercase;
    font-family: "Karantina", system-ui;
    font-weight: 400;
    letter-spacing: 0.45rem;
    font-size: 2.5rem;
    padding-left: 20rem;

    @media (max-width: 28.125em) {
      padding-left: 0;
      font-size: 0.8rem;
      letter-spacing: 0.1rem;
    }

    @media (max-width: 43.75em) and (min-width: 28.1875em) {
      padding-left: 0;
      font-size: 1.5rem;
      letter-spacing: 0.3rem;
    }
    @media (max-width: 66.25em) and (min-width: 43.8125em) {
      padding-left: 0;
      font-size: 2rem;
      letter-spacing: 0.38rem;
    }
  }
`;

export const FilterButton = styled.div`
  display: flex;
  flex-direction: column;
  margin: 0.3125rem 0;

  & > button {
    background-color: rgb(var(--color-black));
    color: rgb(var(--color-white));
    border: none;
    border-radius: 0.59rem;
    padding: 0.25rem 0.5rem;
    text-transform: capitalize;
    font-size: 0.5rem;
    font-weight: 800;
    text-transform: capitalize;
    margin-bottom: 0.4rem;

    @media (max-width: 28.125em) {
      padding: 0.07rem 0.15rem;
      font-size: 0.29rem;
      margin-bottom: 0.15rem;
    }
    @media (max-width: 43.75em) and (min-width: 28.1875em) {
      padding: 0.18rem 0.35rem;
      font-size: 0.3rem;
      margin-bottom: 0.25rem;
    }

    &:hover {
      opacity: 0.8;
    }
  }
`;
export const FilterBox = styled.form`
  display: flex;
  align-items: center;
  text-align: right;
  margin-left: auto;
  margin-bottom: 0.125rem;
  flex-direction: column;

  & > p {
    color: rgb(var(--color-red));
    font-size: 1rem;
    animation: ${fadeInOut} 4.5s ease-in-out;

    @media (max-width: 43.75em) {
      font-size: 0.6rem;
    }
  }

  & > div {
    display: flex;
    align-items: center;
    gap: 0.375rem;
    @media (max-width: 28.125em) {
      gap: 0.1rem;
    }
    @media (max-width: 43.75em) and (min-width: 28.1875em) {
      gap: 0.22rem;
    }

    & > p {
      font-size: 0.5625rem;
      font-weight: 700;

      @media (max-width: 28.125em) {
        font-size: 0.35rem;
      }

      @media (max-width: 43.75em) and (min-width: 28.1875em) {
        font-size: 0.4rem;
      }
    }

    & > input { 
      border: 0.04rem solid rgb(var(--color-black));
      border-radius: 0.5rem;
      text-transform: uppercase;
      background-color: rgb(var(--color-light-grey));
      font-size: 0.58rem;
      font-weight: 800;
      height: 1.7rem;
      width: 4.8rem;
      cursor: pointer;
      padding-left: 0.3rem;

      ::placeholder{
        font-size: 1.875rem;
        color: rgb(var(--color-black));
      }

      
      @media (max-width: 28.125em) {
        width: 2.6rem;
        height: 0.9rem;
        font-size: 0.27rem;
        border-radius: 0.2rem;
        padding-left: 0.125rem;
      }

      @media (max-width: 43.75em) and (min-width: 28.1875em) {
        width: 3.5rem;
        height: 1.1rem;
        font-size: 0.42rem;
        border-radius: 0.25rem;
        padding-left: 0.08rem;
      }
    }
    &::-webkit-input-placeholder {
      color: rgb(var(--color-black));
      opacity: 1;
    }
    &::-webkit-datetime-edit {
      padding: 1em;
    }
    &::-webkit-datetime-edit-fields-wrapper {
    }
    &::-webkit-datetime-edit-text {
    }
    &::-webkit-datetime-edit-month-field {
    }
    &::-webkit-datetime-edit-day-field {
    }
    &::-webkit-datetime-edit-year-field {
    }
    &::-webkit-inner-spin-button {
      display: none;
    }
    &::-webkit-calendar-picker-indicator {
    }
  }
`;

export const SearchBox = styled.div`
  margin-left: auto;
`;

export const PaginationBox = styled.div`
  display: flex;
  justify-content: flex-end;
  margin: 5rem;

  @media (max-width: 66.25em) {
    display: flex;
    justify-content: center;
  }

  & > ul {
    display: flex;
    list-style: none;
    padding: 0;
    background-color: rgb(var(--color-light-grey));

    & > li {
      display: flex;
      justify-content: center;
      align-items: center;
      padding: 0.5rem 1rem;
      font-size: 0.6875rem;
      cursor: pointer;
      transition: background-color 0.3s ease;

      &:visited {
        background-color: rgb(var(--color-white));
      }

      &:active {
        background-color: rgb(var(--color-white));
      }

      @media (max-width: 21.25em) {
        font-size: 0.25rem;
        padding: 0.3rem 0.45rem;
      }
      @media (max-width: 28.125em) and (min-width: 21.3125em) {
        font-size: 0.3rem;
        padding: 0.39rem 0.5rem;
      }
      @media (max-width: 43.75em) and (min-width: 28.1875em) {
        font-size: 0.45rem;
        padding: 0.4rem 0.67rem;
      }

      &:not(:last-child) {
        border-right: 0.0625rem solid rgb(var(--color-black));
      }

      &:last-child {
        width: 2.5rem;

        @media (max-width: 28.125em) {
          width: 1.8rem;
        }
      }
    }
  }
`;
