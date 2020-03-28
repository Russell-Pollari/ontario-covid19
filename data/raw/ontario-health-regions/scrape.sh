echo Algoma NA
echo Brant $(wget -q -O - 'https://www.bchu.org/ServicesWeProvide/InfectiousDiseases/Pages/coronavirus.aspx#accordionBody_1585251202796' | grep '<td.*>.*td'  | head -n 1 |  sed -E -e 's/.*">([^>]+)<\/td.*$/\1/' | sed -E -e 's/\xe2\x80\x8b//g' )
echo Chatham-Kent $(wget -q -O - https://ckphu.com/covid-19/ | grep -i confirmed | head -n 1 | sed -E -e 's/.*strong>([^ ]+) confirmed.*$/\1/')
echo Durham $(curl -s https://www.durham.ca/en/health-and-wellness/novel-coronavirus-update.aspx | grep 'is currently monitoring' | sed -E -e 's/^.*is currently monitoring ([^ ]+) .*/\1/')
echo Eastern-Ontario $(wget -q -O - https://eohu.ca/en/my-health/covid-19-status-update-for-eohu-region | grep '<td>.*td'  | tail -n 1 |  sed -E -e 's/^.*>([0-9]+)<.*/\1/')
echo Grey-Bruce NA
echo Haldimand-Norfolk NA
echo Halton $(curl -s https://www.halton.ca/For-Residents/Immunizations-Preventable-Disease/Diseases-Infections/New-Coronavirus | grep '<td>.*td' | head -1 | sed -E -e 's/^.*>([^<]+)<.*/\1/')
echo Hamilton $(wget -q -O - https://www.hamilton.ca/coronavirus | grep positive | sed -E -e 's/^.*positive cases - ([^<]+)<.*/\1/')
echo Hastings-Prince-Edward $(wget -q -O - https://hpepublichealth.ca/the-novel-coronavirus-2019ncov/ | grep '<td>.*td'  | head -n 1 |  sed -E -e 's/^.*>([0-9]+)<.*/\1/')
echo HKPR $(wget -q -O - https://www.hkpr.on.ca/featured_posts/novel-coronavirus/ | grep 'Case #'  | sed -E -e 's/^.*>Case #([^<]+)<.*/\1/')
echo Huron-Perth NA
echo KFLA $(wget -q -O - https://www.kflaph.ca/en/healthy-living/novel-coronavirus.aspx | grep '<td>.*td'  | head -n 1 |  sed -E -e 's/^.*>([^<]+)<.*/\1/')
echo Lambton $(wget -q -O - https://lambtonpublichealth.ca/2019-novel-coronavirus/ | grep '<td.*>.*td'  | head -n 1 |  sed -E -e 's/.*Lambton[^0-9]*td>([^>]+)<\/td.*$/\1/')
echo Leeds NA
echo Middlesex-London $(curl -s https://www.healthunit.com/novel-coronavirus | grep '<td>.*td' | head -1 | sed -E -e 's/^.*>([^<]+).*/\1/')
echo Niagara $(wget -q -O - https://niagararegion.ca/health/covid-19/default.aspx?topic=1 | grep "strCaseNumbers" |  sed -E -e 's/^.*strCaseNumbers">([^<]+)<.*/\1/')
echo North-Bay-Parry-Sound NA
echo Northwestern NA
echo Ottawa $(curl -s https://www.ottawapublichealth.ca/en/public-health-topics/novel-coronavirus.aspx | grep 'confirmed' | grep OPH | head -n 1 | sed -E -e 's/^.*([0-9]{2,}).+confirmed cases.*/\1/')
# echo Ottawa $(curl -s https://www.ottawapublichealth.ca/en/public-health-topics/novel-coronavirus.aspx | grep 'confirmed' | grep OPH | head -n 1 | sed -E -e 's/^.*> ([^ ]+) confirmed.*/\1/')
# echo Ottawa $(curl -s https://www.ottawapublichealth.ca/en/public-health-topics/novel-coronavirus.aspx | grep 'confirmed' | grep OPH | head -n 1 | sed -E -e 's/^.*investigating ([^ ]+) confirmed.*/\1/' )
# echo Ottawa $(curl -s https://www.ottawapublichealth.ca/en/public-health-topics/novel-coronavirus.aspx | grep 'indeterm' | grep OPH | head -n 1 | sed -E -e 's/^.* ([^ ]+) indeterminate.*/\1/')
echo Peel $(curl -s https://peelregion.ca/coronavirus/ | grep strong | grep -v '<p>' | tail -n 1 | sed -E -e 's/^.*strong>([^<]+)<.*/\1/')
echo Peterborough $(wget -q -O - https://www.peterboroughpublichealth.ca/for-professionals/health-professionals/novel-coronavirus-2019-ncov-health-professionals/situation-report-for-health-care-providers/ | grep 'Confirmed positive' | head -n 1 | sed -E -e 's/^.*positive: ([^<]+)<.*/\1/')
echo Porcupine $(wget -q -O - http://www.porcupinehu.on.ca/en/your-health/infectious-diseases/novel-coronavirus/  | grep '<td.*>[0-9].*td' | head -n 2 | tail -n 1 |  sed -E -e 's/.*">([^>]+)<\/td.*$/\1/')
echo Renfrew NA
echo Simcoe-Muskoka $(curl -s http://www.simcoemuskokahealthstats.org/topics/infectious-diseases/a-h/covid-19 | grep 'Simcoe Muskoka District Health Unit'  | grep confirm | head -n 1 | sed -E -e 's/^.*>([^ ]+) confirmed.*/\1/')
echo SouthWestern $(wget -q -O - https://www.swpublichealth.ca/content/community-update-novel-coronavirus-covid-19 | grep '<td.*>[0-9].*td' | wc -l)
# echo Sudbury $(wget -q -O - https://www.phsd.ca/health-topics-programs/diseases-infections/coronavirus/current-status-covid-19 | grep '<td.*2.>.*td'  | grep updated | sed -E -e 's/^.*>([0-9]+)<.*/\1/')
echo Sudbury $(wget -q -O - https://www.phsd.ca/health-topics-programs/diseases-infections/coronavirus/current-status-covid-19 | grep '<td.*2.>.*td' | grep 'last confirmation' | sed -E -e 's/^.*column-2">(.+)<.*/\1/')
echo Thunderbay NA
echo Timiskaming NA
echo Toronto $(curl -s https://www.toronto.ca/home/covid-19/ | grep cases | sed -E -e 's/^.*has had ([^ ]+) cases.*/\1/')
echo Waterloo $(curl -s https://www.regionofwaterloo.ca/en/health-and-wellness/positive-cases-in-waterloo-region.aspx | grep Center | tail -n 1 | sed -E -e 's/^.*>([^*]+).*/\1/')
echo Wellington-Dufferin-Guelph $(wget -q -O - https://wdgpublichealth.ca/your-health/covid-19-information-public/assessment-centre-and-case-data | grep '<td.*>[0-9].*td'  | head -n -4 | grep -v Male | grep -v Female | tail -n 1 | sed -E -e 's/.*td>([^>]+)<\/td.*$/\1/'  )
echo Windsor-Essex $(wget -q -O - https://www.wechu.org/cv/local-updates | grep '<b>.*b' | head -n 1 | sed -E -e 's/.*b>([^>]+)<\/b.*$/\1/' )
# echo York $(curl -s 'https://www.york.ca/wps/portal/yorkhome/health/yr/infectiousdiseasesandprevention/covid19/covid19/!ut/p/z1/tVRNc4IwEP0tHjwyWT4q8YhoBRyx01aFXJwIUdNKUIha-usbnX6clOm05JBsMrtv814yDxEUISLoka-p5LmgW7WPSWfhO0Pf80YQTCzsggMTJzBsDIOujuaXBMOwOp7uQgDeBIN_bz_c9bGnw8hA5Hb9DBFEdglPUWximtrpkmnUMqlm6TjRaLrsaOYSIO1YGOs2PWcnQu7kBsVVsUhyIZmQbajy4lVtSsnl4XKwyTOmZka3ctMGLlYsUZQOZcpLRktWUpHuCnZUuYpoG5L8yFO9-x188rpx8TMvuDIcUPWkLiVWLeyrLR4NND9ydkJTkReZeoqnXyrl1XbQ_9ihBt5sFN6GZuGNZuH_R5zAB1d3FPzQHJjgGL6Le2aAw7BZ7cNmtQ-b1T5s9t_P_ipOUOeZypSNYuyO1wqWyo2m3C1HUY3HoejL2n4CFPOX_Z44ylPPRvomUdSoqe6yaYbNShPvvVAbukt8el5lt5Z5vzo5rdYHUF08-Q!!/dz/d5/L2dBISEvZ0FBIS9nQSEh/#.XnTdr8jYrnE' | grep Case | grep td |  tail -n 1 | sed -E -e 's/^.*>Case ([^,]+),.*/\1/' )
echo York $(curl -s 'https://www.york.ca/wps/portal/yorkhome/health/yr/infectiousdiseasesandprevention/covid19/covid19/!ut/p/z1/tVRNc4IwEP0tHjwyWT4q8YhoBRyx01aFXJwIUdNKUIha-usbnX6clOm05JBsMrtv814yDxEUISLoka-p5LmgW7WPSWfhO0Pf80YQTCzsggMTJzBsDIOujuaXBMOwOp7uQgDeBIN_bz_c9bGnw8hA5Hb9DBFEdglPUWximtrpkmnUMqlm6TjRaLrsaOYSIO1YGOs2PWcnQu7kBsVVsUhyIZmQbajy4lVtSsnl4XKwyTOmZka3ctMGLlYsUZQOZcpLRktWUpHuCnZUuYpoG5L8yFO9-x188rpx8TMvuDIcUPWkLiVWLeyrLR4NND9ydkJTkReZeoqnXyrl1XbQ_9ihBt5sFN6GZuGNZuH_R5zAB1d3FPzQHJjgGL6Le2aAw7BZ7cNmtQ-b1T5s9t_P_ipOUOeZypSNYuyO1wqWyo2m3C1HUY3HoejL2n4CFPOX_Z44ylPPRvomUdSoqe6yaYbNShPvvVAbukt8el5lt5Z5vzo5rdYHUF08-Q!!/dz/d5/L2dBISEvZ0FBIS9nQSEh/#.XnTdr8jYrnE' | grep 'Total cases' | sed -E -e 's/^.*Total cases[^0-9]*([0-9]+).*/\1/')
