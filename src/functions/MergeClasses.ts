export default function mergeClasses(...classlists) {
    const classes = [];

    for (let classlist in classlists) {
      if (classlists.hasOwnProperty(classlist)) {
        let list = classlists[`${classlist}`];

        if (typeof list === "string") {
          classes.push(list);
        } else if (Array.isArray(list)) {
          classes.push(...list);
        } else if (typeof list === "object") {
          for (let cls in list) {
            if (list.hasOwnProperty(cls) &&
              typeof list[`${cls}`] !== "object" &&
              list[`${cls}`] &&
              cls !== "!override") {
              classes.push(`${cls}`);
            }
          }
        }
      }
    }

    return [...new Set(classes)].join(" ");
};
