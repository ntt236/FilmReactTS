import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@radix-ui/react-dropdown-menu";
import axios from "axios";
import { ChevronDown } from "lucide-react";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

interface National {
  _id: string;
  name: string;
  slug: string;
}

const NationalDropDown = () => {
  const [national, setNational] = useState<National[]>([]);
  console.log("🚀 ~ GenreDropDown ~ genres:", national);

  useEffect(() => {
    try {
      const fetchNational = async () => {
        const res = await axios.get("https://phimapi.com/quoc-gia");
        if (res.status === 200) {
          setNational(res.data);
        }
      };
      fetchNational();
    } catch (error) {
      console.log("🚀 ~ useEffect ~ error:", error);
    }
  }, []);

  return (
    <DropdownMenu>
      <DropdownMenuTrigger className="flex items-center gap-1 font-medium">
        Quốc gia
        <ChevronDown size={16} />
      </DropdownMenuTrigger>
      <DropdownMenuContent
        className="w-[600px] right-0 mt-9 shadow-lg rounded-md ring-1 ring-black ring-opacity-5"
        align="end"
      >
        <div className="grid grid-cols-3 gap-4 justify-items-center px4 py-4">
          {national.map((item) => (
            <DropdownMenuItem asChild key={item._id}>
              <Link to={`quoc-gia/${item.slug}`}>{item.name}</Link>
            </DropdownMenuItem>
          ))}
        </div>
      </DropdownMenuContent>
    </DropdownMenu>
  );
};

export default NationalDropDown;
