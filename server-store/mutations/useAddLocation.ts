import { IGetAllArgs } from "../queries/useGetNotifications";
import { api } from "../utils";

import { useMutation } from "@tanstack/react-query";

type AddLocationArg = string;

const addLocation = async (data: AddLocationArg): Promise<IGetAllArgs> => {
  const response = await api.post(`/water-quality-data?location=${data}`, data);
  return response.data.data;
};

const useAddLocation = () => {
  return useMutation(addLocation, {
    mutationKey: ["ADD_LOCATION"],
  });
};

export default useAddLocation;
