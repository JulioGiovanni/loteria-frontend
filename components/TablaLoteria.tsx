import React from 'react';
import { Card, CardContent } from './ui/card';
import { Table, TableBody, TableCell, TableRow } from './ui/table';

const TablaLoteria = ({ Tabla }: any) => {
  // Divide el arreglo de cartas en grupos de 4 cartas cada uno
  const gruposDeCartas = [];
  for (let i = 0; i < Tabla.cartas.length; i += 4) {
    gruposDeCartas.push(Tabla.cartas.slice(i, i + 4));
  }

  return (
    <Card className="w-[550px]">
      <CardContent>
        <Table>
          <TableBody>
            {gruposDeCartas.map((grupo: any, index: number) => (
              <TableRow key={index}>
                {grupo.map((carta: any) => (
                  <TableCell key={carta.id}>{carta.nombre}</TableCell>
                ))}
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </CardContent>
    </Card>
  );
};

export default TablaLoteria;
