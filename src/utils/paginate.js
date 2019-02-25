import _ from "lodash";

export function paginate(items, pageNumber, pageSize) {
  const startIndex = (pageNumber - 1) * pageSize;
  //Wrap items array into lodash object
  return _(items)
    .slice(startIndex)
    .take(pageSize)
    .value();
}
