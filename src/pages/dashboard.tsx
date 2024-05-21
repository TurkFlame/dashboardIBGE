import { Filter } from 'lucide-react';
import React, { useEffect, useState } from 'react';

function DashBoard() {
    const [totalPib, setTotalPib] = useState(null);
    const [pibPerCapita, setPibPerCapita] = useState(null);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const filter = { countries: ['BR', 'EUA', 'AR', 'ZA', 'DE', 'IN'] };
                const totalPibResponse = await fetch('URL_DA_API/totalpib', {
                    method: 'GET',
                    headers: {
                        'Content-Type': 'application/json'
                    }
                });
                const totalPibData = await totalPibResponse.json();
                setTotalPib(totalPibData);

                const pibPerCapitaResponse = await fetch('URL_DA_API/pibpercapita', {
                    method: 'GET',
                    headers: {
                        'Content-Type': 'application/json'
                    }
                });
                const pibPerCapitaData = await pibPerCapitaResponse.json();
                setPibPerCapita(pibPerCapitaData);
            } catch (error) {
                console.error('Erro ao buscar dados da API:', error);
            }
        };

        fetchData();
    }, []);
    
    return (
        <div>
           
        </div>
    );
}

export default DashBoard;
