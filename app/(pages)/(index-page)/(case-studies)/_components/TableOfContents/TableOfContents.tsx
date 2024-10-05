export type TableOfContentsProps = {
  sections: string[];
};

export default function TableOfContents({ sections }: TableOfContentsProps) {
  return (
    <div className="fixed pt-20 pl-10 group">
      <div className="flex flex-col w-max gap-5 p-4 absolute group-hover:opacity-0">
        {sections.map((_, index) => (
          <div className="w-4 h-1 bg-black" key={index}></div>
        ))}
      </div>
      <div className="flex flex-col absolute opacity-0 w-max bg-white rounded-lg shadow-lg p-4 group-hover:opacity-100 transition-opacity duration-500">
        {sections.map((section, index) => (
          <p className="hover:text-red-400" key={index}>
            {section}
          </p>
        ))}
      </div>
    </div>
  );
}
