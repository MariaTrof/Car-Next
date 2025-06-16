import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "../../shared/components/Select/select";

const SortSelect = () => {
  return (
    <div className="rounded-lg  bg-sidebar w-[80%] mx-auto my-[8px] py-[10px] h-30 flex flex-col items-center justify-center">
      <p className="text-2xl my-[8px] sm:text-3xl lg:text-4xl lg:my-[10px] text-center">
        Выберите вид сортировки
      </p>
      <Select>
        <SelectTrigger className="w-[60%] my-[10px] bg-background">
          <SelectValue placeholder="цена" />
        </SelectTrigger>
        <SelectContent>
          <SelectGroup>
            <SelectItem value="none">Не выбрана</SelectItem>
            <SelectItem value="arc">По возрастанию</SelectItem>
            <SelectItem value="desc">По убыванию</SelectItem>
          </SelectGroup>
        </SelectContent>
      </Select>
    </div>
  );
};

export default SortSelect;
