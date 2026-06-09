import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import {
  addTodoApi,
  deleteTodoApi,
  editTodoApi,
  getTodoApi,
} from "../axoisApiEndPoints/todo";

// get api
export const useGetTodos = () => {
  return useQuery({
    queryKey: ["todoList"],
    queryFn: async () => {
      const response = await getTodoApi();
      return response;
    },
  });
};

// add api
export const useAddTodos = (setIsOpen) => {
  const queryClient = useQueryClient(); // to refetch todo list after add

  return useMutation({
    mutationFn: async (payload) => {
      const response = await addTodoApi(payload);
      return response;
    },
    onSuccess: () => {
      setIsOpen(false);
      queryClient.invalidateQueries(["todoList"]);
    },
  });
};

// edit api
export const useEditTodos = (setIsOpen) => {
  const queryClient = useQueryClient(); // to refetch todo list after add

  return useMutation({
    mutationFn: async ({ id, payload }) => {
      const response = await editTodoApi({ id, payload });
      return response;
    },
    onSuccess: () => {
      setIsOpen(false);
      queryClient.invalidateQueries(["todoList"]);
    },
  });
};

// delete api
export const usedeleteTodos = (setIsDeleteOpen) => {
  const queryClient = useQueryClient(); // to refetch todo list after add

  return useMutation({
    mutationFn: async (id) => {
      const response = await deleteTodoApi(id);
      return response;
    },
    onSuccess: () => {
      setIsDeleteOpen(false);
      queryClient.invalidateQueries(["todoList"]);
    },
  });
};
