export const getDate = (value: any) => {
  const date = new Date(value);
  const yyyy = date.getFullYear();
  const mm = String(date.getMonth() + 1).padStart(2, "0");
  const dd = String(date.getDate()).padStart(2, "0");
  return `${yyyy}.${mm}.${dd}`;
};

export const getCost = (value: number) => {
  const cost = value.toLocaleString("ko-KR");
  return `${cost}원`;
};

const getAnonymousName = (value: string): string => {
  return value.replace(
    /.(.+)/,
    (match, group) => match[0] + "*".repeat(group.length),
  );
};

export const getCustomerInfo = (
  name: string,
  company: string | null,
  isNew: boolean | undefined,
): string => {
  const infos: string[] = [];
  infos.push(getAnonymousName(name));
  if (company) {
    infos.push(company);
  }
  if (isNew !== undefined) {
    if (isNew) {
      infos.push("신규 고객");
    } else {
      infos.push("기존 고객");
    }
  }
  return infos.join(" · ");
};
