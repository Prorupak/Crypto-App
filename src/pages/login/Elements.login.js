import styled from "styled-components";
import tw from "twin.macro";

export const LoginSection = styled.section.attrs({
  className: "flex flex-col items-center h-screen md:flex-row",
})``;

export const HeroWrapper = styled.div.attrs({
  className: "bg-blue-600 hidden lg:block w-full md:w-1/2 xl:w-2/3 h-screen",
})``;

export const Img = styled.img.attrs({
  className: "w-full h-full object-cover",
})``;

export const FormSection = styled.div.attrs({
  className:
    "bg-white w-full md:max-w-md lg:max-w-full md:mx-auto md:mx-0 md:w-1/2 xl:w-1/3 h-screen px-6 lg:px-6 xl:px-12 flex items-center",
})``;

export const FormContainer = styled.div.attrs({
  className: "mt-6 h-100 w-full",
})`
  & {
    hr {
      ${tw`my-6 border-gray-300 w-full`}
    }
  }
`;

export const Heading = styled.div.attrs({})`
  & {
    h1 {
      ${tw`text-xl font-bold`}
    }
    h2 {
      ${tw`mt-12 text-lg font-bold md:text-2xl leading-tight`}
    }
    button {
      ${tw`w-full block bg-white hover:bg-gray-100 focus:bg-gray-100 text-gray-900 font-semibold rounded-lg px-4 py-3 border border-gray-300`}
    }
  }
`;

export const Form = styled.form.attrs({
  className: "mt-6",
})`
  & {
    label {
      ${tw`block text-gray-700`}
    }
    input {
      ${tw`w-full px-3 py-2 rounded-lg bg-gray-200 mt-2 border focus:border-blue-500 focus:bg-white focus:outline-none`}
    }
    button {
      ${tw`w-full block bg-blue-500 hover:bg-blue-400 focus:bg-blue-400 text-white font-semibold rounded-lg px-3 py-2 mt-6`}
    }
  }
`;

export const Button = styled.button.attrs({
  className:
    "w-full block bg-white hover:bg-gray-100 focus:bg-gray-100 text-gray-900 font-semibold rounded-lg px-4 py-3 border border-gray-300",
})`
  & {
    div {
      ${tw`flex items-center justify-center`}
    }
  }
`;
