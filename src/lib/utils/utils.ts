export const getDate = (value: any) => {
  const date = new Date(value);
  const yyyy = date.getFullYear();
  const mm = String(date.getMonth() + 1).padStart(2, "0");
  const dd = String(date.getDate()).padStart(2, "0");
  return `${yyyy}.${mm}.${dd}`;
};

export const getParamDate = (value: string): string => {
  if (value === "") {
    return "";
  }
  const [yy, mm, dd] = value.split(".").map((part) => part.trim());
  return `20${yy}-${mm}-${dd}`;
};

export const getCost = (value: number) => {
  const cost = value.toLocaleString("ko-KR");
  return `${cost}원`;
};

export const getCustomerInfo = (
  name: string,
  company: string | null,
  isNew?: boolean | undefined,
): string => {
  const infos: string[] = [];
  infos.push(name);
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

export const getAddress = (address: string, detailAddress: string | null): string => {
  if(detailAddress) {
    return `(${address}, ${detailAddress})`;
  }
  else return `(${address})`
}

export const getPhoneNumber = (phone: string): string => {
  return phone.replace(/(\d{3})(\d{4})(\d{4})/, '$1-$2-$3');
}

export const getFileSize = (fileSize: number): string => {
  if(fileSize < 1024) {
    return `${fileSize.toFixed(2)} B`;
  } else if (fileSize < 1024 * 1024) {
    return `${(fileSize/1024).toFixed(2)} KB`;
  } else return `${(fileSize/(1024*1024)).toFixed(2)} MB`;
}