const categories = [
  { name: "fashion", color: "#da85c731" },
  { name: "food", color: "#7fb88133" },
  { name: "travel", color: "#ff795736" },

  { name: "style", color: "#57c4ff31" },
]

const MostCategories = () => {
  return (
    <div className="flex w-full flex-wrap gap-2 ">
      {categories.map((cate, idx) => (
        <div key={idx} style={{ backgroundColor: cate.color }} className="btn min-w-[100px]">
          {cate.name}
        </div>
      ))}
    </div>
  )
}

export default MostCategories
