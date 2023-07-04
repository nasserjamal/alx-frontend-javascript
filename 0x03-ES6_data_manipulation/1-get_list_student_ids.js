export default function getListStudentIds(arr) {
  let ans = [];
  ans = arr.map((obj) => obj.id);
  return ans;
}
