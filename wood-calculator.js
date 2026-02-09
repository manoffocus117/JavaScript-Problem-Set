/** calculate how much wood you need (example)
 * chair => 3cft
 * table => 10cft
 * bed => 50cft
 * 
 */


function wood_quantity_calculator (chair_quantity, table_quantity, bed_quantity) {
      const per_chair_wood = 3;
      const per_table_wood = 10;
      const per_bed_wood = 50;

      let total_chair_wood = chair_quantity * per_chair_wood;
      let total_table_wood = table_quantity * per_table_wood;
      let total_bed_wood = bed_quantity * per_bed_wood;

      let total_wood = total_chair_wood + total_table_wood + total_bed_wood;
      return total_wood;
}


let output = wood_quantity_calculator(6, 2, 2);

console.log("total wood needed", output, "cft");


