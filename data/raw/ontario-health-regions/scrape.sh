echo Algoma $(wget -q -O - http://www.algomapublichealth.com/disease-and-illness/infectious-diseases/novel-coronavirus/ | grep td | grep strong | head -n 2 | tail -n 1 | sed -E -e  's/.*strong>([^>]+)<.*$/\1/')
echo Brant $(wget -q -O - 'https://www.bchu.org/ServicesWeProvide/InfectiousDiseases/Pages/coronavirus.aspx#accordionBody_1585251202796' | grep '<td.*>.*td'  | head -n 1 |  sed -E -e 's/.*">([^>]+)<\/td.*$/\1/' | sed -E -e 's/\xe2\x80\x8b//g' )
echo Chatham-Kent $(wget -q -O - https://ckphu.com/covid-19/ | grep -i confirmed | head -n 1 | sed -E -e 's/.*, there are ([0-9]+).*confirmed.*$/\1/')
echo Durham $(curl -s https://www.durham.ca/en/health-and-wellness/novel-coronavirus-update.aspx | grep 'reported since' | sed -E -e 's/^.*strong.([0-9]+).*cases of COVID-19 reported.*/\1/')
echo Eastern-Ontario $(wget -q -O - https://eohu.ca/en/my-health/covid-19-status-update-for-eohu-region | grep '<td>.*td'  | tail -n 1 |  sed -E -e 's/^.*>([0-9]+)<.*/\1/')
echo Grey-Bruce NA
echo Haldimand-Norfolk $(wget -q -O - https://hnhu.org/health-topic/coronavirus-covid-19/ | grep positive | head -n 1 | sed -E 's/.*:[^0-9]*([0-9]+).*/\1/')
echo Halton $(curl -s https://www.halton.ca/For-Residents/Immunizations-Preventable-Disease/Diseases-Infections/New-Coronavirus | grep '<td>.*td' | sed -n '/Total/,$p' | sed '2q;d' | sed -E -e 's/.*td.[^0-9]*([0-9]+)..str.*/\1/')
echo Hamilton $(wget -q -O - https://www.hamilton.ca/coronavirus | grep positive | sed -E -e 's/^.*positive cases - ([0-9]+)[^<]*<.*/\1/')
echo Hastings-Prince-Edward $(wget --tries=2  --timeout=1 -q -O - https://hpepublichealth.ca/the-novel-coronavirus-2019ncov/ | grep '<td>.*td'  | head -n 1 |  sed -E -e 's/^.*>([0-9]+)<.*/\1/')
wget -q https://web.archive.org/save/https://hpepublichealth.ca/the-novel-coronavirus-2019ncov/
echo HKPR $(wget -q -O - https://www.hkpr.on.ca/  | grep '<td.*>.*td' | tidy -q --show-warnings no  | sed -n '/Confirm/,$p' | sed '14q;d'   | sed -E -e 's/[^0-9]*([0-9]+).*/\1/')
echo Huron-Perth $(wget -q -O - https://www.hpph.ca/en/news/coronavirus-covid19-update.aspx | grep 'td.*td' | head -n 3 | tail -n 1 | sed -E -e  's/.*td.*>([^>]+)<.*$/\1/')
echo KFLA $(wget -q -O - https://www.kflaph.ca/en/healthy-living/novel-coronavirus.aspx | grep '<td>.*td'  | head -n 1 |  sed -E -e 's/^.*>([^<]+)<.*/\1/')
echo Lambton $(wget -q -O - https://lambtonpublichealth.ca/2019-novel-coronavirus/ | grep '<td.*>.*td'  | tidy -q --show-warnings no | sed '13q;d'  | sed -E 's/<td>([0-9]+).*/\1/')
echo Leeds $(wget -q -O - https://healthunit.org/coronavirus/ | grep 'Total of' | sed -E 's/[^0-9]*([0-9]+).*/\1/') && wget -q https://web.archive.org/save/https://healthunit.org/coronavirus/ 
echo Middlesex-London $(curl -s https://www.healthunit.com/novel-coronavirus | grep '<td>.*td' | head -1 | sed -E -e 's/^.*>([^<]+).*/\1/')
echo Niagara $(wget -q -O - https://niagararegion.ca/health/covid-19/default.aspx?topic=1 | grep "strCaseNumbers" |  sed -E -e 's/^.*strCaseNumbers">([^<]+)<.*/\1/')
echo North-Bay-Parry-Sound $(wget -q -O - https://www.myhealthunit.ca/en/health-topics/coronavirus.asp | grep td | sed '4q;d' | sed -E 's/<td.*>([0-9]+).*/\1/')
echo Northwestern NA && wget -q https://web.archive.org/save/https://www.nwhu.on.ca/NewsEvents/Pages/News.aspx
echo Ottawa $(wget -q -O - https://www.ottawapublichealth.ca/en/public-health-topics/novel-coronavirus.aspx | grep 'confirmed' | grep -i "as of" | head -n 1 | sed -E -e 's/^[^0-9]*([0-9]+).*confirmed.*/\1/')
echo Peel $(wget -q -O - https://peelregion.ca/coronavirus/testing | grep td | grep strong | tail -n 1| sed -E 's/.*<strong>([0-9]+).*/\1/')
echo Peterborough $(wget -q -O - https://www.peterboroughpublichealth.ca/for-professionals/health-professionals/novel-coronavirus-2019-ncov-health-professionals/situation-report-for-health-care-providers/ | grep 'Confirmed positive' | head -n 1 | sed -E -e 's/^.*positive: ([^<]+)<.*/\1/')
echo Porcupine $(wget -q -O - http://www.porcupinehu.on.ca/en/your-health/infectious-diseases/novel-coronavirus/  | grep '<t[dh].*>.*t[dh]'  | sed -n '/Positive/,$p'  | sed '2q;d' |  sed -E -e 's/.*">([^>]+)<\/td.*$/\1/')
echo Renfrew $(wget -q -O - https://www.rcdhu.com/novel-coronavirus-covid-19-2/  | grep confirmed | head -n 1 | sed -E -e 's/.*there are.*([0-9]+).*confirmed.*/\1/') && wget -q https://web.archive.org/save/https://www.rcdhu.com/novel-coronavirus-covid-19-2/
echo Simcoe-Muskoka $(curl -s http://www.simcoemuskokahealthstats.org/topics/infectious-diseases/a-h/covid-19 | grep 'Simcoe Muskoka District Health Unit'  | grep confirm | head -n 1 | sed -E -e 's/^.*>([^ ]+) confirmed.*/\1/')
echo SouthWestern $(wget -q -O - https://www.swpublichealth.ca/content/community-update-novel-coronavirus-covid-19 | grep '<td.*>[0-9].*td' | head -n 1  | sed -E 's/.*td>([0-9]+)<.td.*/\1/')
echo Sudbury $(wget -q -O - https://www.phsd.ca/health-topics-programs/diseases-infections/coronavirus/current-status-covid-19 | grep '<td.*2.>.*td'  | head -n 3 | tail -n 1 | sed -E -e 's/^.*>([0-9]+)<.*/\1/')
echo Thunderbay $(wget -q -O - https://www.tbdhu.com/coronavirus | grep td  | head -n 4 | tail -n 1 | sed -E -e  's/.*td>([^>]+)<.*$/\1/' )
echo Timiskaming $(wget -q -O - https://www.timiskaminghu.com/90484/covid-19 | grep 'td.*td' | sed -n '/Positiv/,$p' | sed '2q;d' | sed -E -e  's/.*td.*>([^>]+)<.*$/\1/')
echo Toronto $(wget -q -O - https://www.toronto.ca/home/covid-19/media-room/covid-19-status-of-cases-in-toronto/  | grep td |  sed '2q;d'  |  sed -E -e 's/^.*>([0-9]+)<.*/\1/')
echo Waterloo $(curl -s https://www.regionofwaterloo.ca/en/health-and-wellness/positive-cases-in-waterloo-region.aspx | sed -n '/.*td.*Confirmed/,$p' | sed '2q;d' | sed  -E -e 's/<td>([0-9]+).*/\1/')
echo Wellington-Dufferin-Guelph $(wget -q -O - https://wdgpublichealth.ca/your-health/covid-19-information-public/assessment-centre-and-case-data | grep '<td.*>[0-9].*td'  | head -n -4 | grep -v Male | grep -v Female | tail -n 1 | sed -E -e 's/.*td>([^>]+)<\/td.*$/\1/'  )
echo Windsor-Essex $(wget -q -O - https://www.wechu.org/cv/local-updates | grep '<b>.*b' | head -n 1 | sed -E -e 's/.*b>([^>]+)<\/b.*$/\1/' )
echo York $(wget -q -O - 'https://www.york.ca/wps/portal/yorkhome/health/yr/infectiousdiseasesandprevention/covid19/covid19/!ut/p/z1/tVRNc4IwEP0tHjwyWT4q8YhoBRyx01aFXJwIUdNKUIha-usbnX6clOm05JBsMrtv814yDxEUISLoka-p5LmgW7WPSWfhO0Pf80YQTCzsggMTJzBsDIOujuaXBMOwOp7uQgDeBIN_bz_c9bGnw8hA5Hb9DBFEdglPUWximtrpkmnUMqlm6TjRaLrsaOYSIO1YGOs2PWcnQu7kBsVVsUhyIZmQbajy4lVtSsnl4XKwyTOmZka3ctMGLlYsUZQOZcpLRktWUpHuCnZUuYpoG5L8yFO9-x188rpx8TMvuDIcUPWkLiVWLeyrLR4NND9ydkJTkReZeoqnXyrl1XbQ_9ihBt5sFN6GZuGNZuH_R5zAB1d3FPzQHJjgGL6Le2aAw7BZ7cNmtQ-b1T5s9t_P_ipOUOeZypSNYuyO1wqWyo2m3C1HUY3HoejL2n4CFPOX_Z44ylPPRvomUdSoqe6yaYbNShPvvVAbukt8el5lt5Z5vzo5rdYHUF08-Q!!/dz/d5/L2dBISEvZ0FBIS9nQSEh/#.XnTdr8jYrnE' | grep Total  | sed -E -e 's/^.*Total cases[^0-9]*([0-9]+).*/\1/')
##
wget -O /dev/null -q https://web.archive.org/save/https://www.quebec.ca/en/health/health-issues/a-z/2019-coronavirus/situation-coronavirus-in-quebec/
wget -O /dev/null -q https://web.archive.org/save/http://www.bccdc.ca/health-info/diseases-conditions/covid-19/case-counts-press-statements
## wget -q https://web.archive.org/save/https://ww4.yorkmaps.ca/COVID19/PublicDashboard/index.html # Save York
