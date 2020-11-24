export default interface ApiResponse<T> {
  status: string;
  message: string;
  data: T;
}
