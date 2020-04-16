#install.packages("lubridate")
library(lubridate)
# Premier League Datasets source=http://www.football-data.co.uk/englandm.php
years <- c("2014-2015", "2015-2016", "2016-2017", "2017-2018", "2018-2019")
for (i in years) {
  Data <- read.csv(paste0("~/Documents/DataVis/", i, ".csv"))
  # Arsenal
  # Ref Data
  DataH <- subset(Data, HomeTeam == "Arsenal", select = c(Referee, HY, HR))
  DataA <- subset(Data, AwayTeam == "Arsenal", select = c(Referee, AY, AR))
  names(DataH)[names(DataH) == "HY"] <-"Yellow Card(s)"
  names(DataH)[names(DataH) == "HR"] <-"Red Card(s)"
  names(DataA)[names(DataA) == "AY"] <-"Yellow Card(s)"
  names(DataA)[names(DataA) == "AR"] <-"Red Card(s)"
  RefData <- rbind(DataH, DataA)
  RefData <- aggregate(. ~ Referee, RefData, FUN = sum)
  write.csv(RefData, paste0("~/Documents/DataVis/ArsRefStats", i ,".csv"))
  # Win\Loss Odds
  DataH <- subset(Data, HomeTeam == "Arsenal", select = c(AwayTeam, FTR, B365H, B365D, B365A, BWH, BWD, BWA, IWH, IWD, IWA, PSH, PSD, PSA, VCH, VCD, VCA, WHH, WHD, WHA))
  DataA <- subset(Data, AwayTeam == "Arsenal", select = c(HomeTeam, FTR, B365A, B365D, B365H, BWA, BWD, BWH, IWA, IWD, IWH, PSA, PSD, PSH, VCA, VCD, VCH, WHA, WHD, WHH))
  DataH$FTR <- as.character(DataH$FTR)
  DataA$FTR <- as.character(DataA$FTR)
  DataH$FTR[DataH$FTR == "H"] <- "W"
  DataH$FTR[DataH$FTR == "A"] <- "L"
  DataA$FTR[DataA$FTR == "A"] <- "W"
  DataA$FTR[DataA$FTR == "H"] <- "L"
  DataH$FTR <- as.factor(DataH$FTR)
  DataA$FTR <- as.factor(DataA$FTR)
  names(DataH)[names(DataH) == "AwayTeam"] <- "Team"
  names(DataA)[names(DataA) == "HomeTeam"] <- "Team"
  names(DataH)[names(DataH) == "B365H"] <- "Bet365 Win"
  names(DataH)[names(DataH) == "B365A"] <- "Bet365 Loss"
  names(DataH)[names(DataH) == "BWH"] <- "Bet&Win Win"
  names(DataH)[names(DataH) == "BWA"] <- "Bet&Win Loss"
  names(DataH)[names(DataH) == "IWH"] <- "Interwetten Win"
  names(DataH)[names(DataH) == "IWA"] <- "Interwetten Loss"
  names(DataH)[names(DataH) == "LBH"] <- "Ladbrokes Win"
  names(DataH)[names(DataH) == "LBA"] <- "Ladbrokes Loss"
  names(DataH)[names(DataH) == "PSH"] <- "Pinnacle Win"
  names(DataH)[names(DataH) == "PSA"] <- "Pinnacle Loss"
  names(DataH)[names(DataH) == "VCH"] <- "VC Bet Win"
  names(DataH)[names(DataH) == "VCA"] <- "VC Bet Loss"
  names(DataH)[names(DataH) == "WHH"] <- "William Hill Win"
  names(DataH)[names(DataH) == "WHA"] <- "William Hill Loss"
  names(DataA)[names(DataA) == "B365A"] <- "Bet365 Win"
  names(DataA)[names(DataA) == "B365H"] <- "Bet365 Loss"
  names(DataA)[names(DataA) == "BWA"] <- "Bet&Win Win"
  names(DataA)[names(DataA) == "BWH"] <- "Bet&Win Loss"
  names(DataA)[names(DataA) == "IWA"] <- "Interwetten Win"
  names(DataA)[names(DataA) == "IWH"] <- "Interwetten Loss"
  names(DataA)[names(DataA) == "LBA"] <- "Ladbrokes Win"
  names(DataA)[names(DataA) == "LBH"] <- "Ladbrokes Loss"
  names(DataA)[names(DataA) == "PSA"] <- "Pinnacle Win"
  names(DataA)[names(DataA) == "PSH"] <- "Pinnacle Loss"
  names(DataA)[names(DataA) == "VCA"] <- "VC Bet Win"
  names(DataA)[names(DataA) == "VCH"] <- "VC Bet Loss"
  names(DataA)[names(DataA) == "WHA"] <- "William Hill Win"
  names(DataA)[names(DataA) == "WHH"] <- "William Hill Loss"
  WLOddsData <- rbind(DataH, DataA)
  names(WLOddsData)[names(WLOddsData) == "B365D"] <- "Bet365 Draw"
  names(WLOddsData)[names(WLOddsData) == "BWD"] <- "Bet&Win Draw"
  names(WLOddsData)[names(WLOddsData) == "IWD"] <- "Interwetten Draw"
  names(WLOddsData)[names(WLOddsData) == "LBD"] <- "Ladbrokes Draw"
  names(WLOddsData)[names(WLOddsData) == "PSD"] <- "Pinnacle Draw"
  names(WLOddsData)[names(WLOddsData) == "VCD"] <- "VC Bet Draw"
  names(WLOddsData)[names(WLOddsData) == "WHD"] <- "William Hill Draw"
  WLOddsData$`Bet365 Win` <- 1/WLOddsData$`Bet365 Win`
  WLOddsData$`Bet365 Draw` <- 1/WLOddsData$`Bet365 Draw`
  WLOddsData$`Bet365 Loss` <- 1/WLOddsData$`Bet365 Loss`
  WLOddsData$`Bet&Win Win` <- 1/WLOddsData$`Bet&Win Win`
  WLOddsData$`Bet&Win Draw` <- 1/WLOddsData$`Bet&Win Draw`
  WLOddsData$`Bet&Win Loss` <- 1/WLOddsData$`Bet&Win Loss`
  WLOddsData$`Interwetten Win` <- 1/WLOddsData$`Interwetten Win`
  WLOddsData$`Interwetten Draw` <- 1/WLOddsData$`Interwetten Draw`
  WLOddsData$`Interwetten Loss` <- 1/WLOddsData$`Interwetten Loss`
  WLOddsData$`Pinnacle Win` <- 1/WLOddsData$`Pinnacle Win`
  WLOddsData$`Pinnacle Draw` <- 1/WLOddsData$`Pinnacle Draw`
  WLOddsData$`Pinnacle Loss` <- 1/WLOddsData$`Pinnacle Loss`
  WLOddsData$`VC Bet Win` <- 1/WLOddsData$`VC Bet Win`
  WLOddsData$`VC Bet Draw` <- 1/WLOddsData$`VC Bet Draw`
  WLOddsData$`VC Bet Loss` <- 1/WLOddsData$`VC Bet Loss`
  WLOddsData$`William Hill Win` <- 1/WLOddsData$`William Hill Win`
  WLOddsData$`William Hill Draw` <- 1/WLOddsData$`William Hill Draw`
  WLOddsData$`William Hill Loss` <- 1/WLOddsData$`William Hill Loss`
  WLOddsData$Win[WLOddsData$FTR == "W"] <- 1
  WLOddsData$Draw[WLOddsData$FTR == "W"] <- 0
  WLOddsData$Loss[WLOddsData$FTR == "W"] <- 0
  WLOddsData$Win[WLOddsData$FTR == "D"] <- 0
  WLOddsData$Draw[WLOddsData$FTR == "D"] <- 1
  WLOddsData$Loss[WLOddsData$FTR == "D"] <- 0
  WLOddsData$Win[WLOddsData$FTR == "L"] <- 0
  WLOddsData$Draw[WLOddsData$FTR == "L"] <- 0
  WLOddsData$Loss[WLOddsData$FTR == "L"] <- 1
  WLOddsData <- WLOddsData[,-c(2,2)]
  write.csv(WLOddsData, paste0("~/Documents/DataVis/ArsWLOdds", i, ".csv"))
  # Win\Loss Day Of Week
  DataH <- subset(Data, HomeTeam == "Arsenal", select = c(FTR, Date))
  DataA <- subset(Data, AwayTeam == "Arsenal", select = c(FTR, Date))
  dow <- function(x) format(as.Date(x), "%A")
  DataH$Day <- dow(strptime(as.character(DataH$Date), "%d/%m/%Y"))
  DataA$Day <- dow(strptime(as.character(DataA$Date), "%d/%m/%Y"))
  DataH$FTR <- as.character(DataH$FTR)
  DataA$FTR <- as.character(DataA$FTR)
  DataH$FTR[DataH$FTR == "H"] <- "W"
  DataH$FTR[DataH$FTR == "A"] <- "L"
  DataA$FTR[DataA$FTR == "A"] <- "W"
  DataA$FTR[DataA$FTR == "H"] <- "L"
  DataH$FTR <- as.factor(DataH$FTR)
  DataA$FTR <- as.factor(DataA$FTR)
  WLDowData <- rbind(DataH, DataA)
  WLDowData$Wins[WLDowData$FTR == "W"] <- 1
  WLDowData$Draws[WLDowData$FTR == "W"] <- 0
  WLDowData$Losses[WLDowData$FTR == "W"] <- 0
  WLDowData$Wins[WLDowData$FTR == "D"] <- 0
  WLDowData$Draws[WLDowData$FTR == "D"] <- 1
  WLDowData$Losses[WLDowData$FTR == "D"] <- 0
  WLDowData$Wins[WLDowData$FTR == "L"] <- 0
  WLDowData$Draws[WLDowData$FTR == "L"] <- 0
  WLDowData$Losses[WLDowData$FTR == "L"] <- 1
  WLDowData <- WLDowData[,-c(1,2)]
  WLDowData <- aggregate(. ~ Day, WLDowData, FUN = sum)
  write.csv(WLDowData, paste0("~/Documents/DataVis/ArsWLDow", i, ".csv"))
  # Conversion Rate
  DataH <- subset(Data, HomeTeam == "Arsenal", select = c(AwayTeam, FTHG, HS, HST))
  DataA <- subset(Data, AwayTeam == "Arsenal", select = c(HomeTeam, FTAG, AS, AST))
  names(DataH)[names(DataH) == "AwayTeam"] <- "Team"
  names(DataA)[names(DataA) == "HomeTeam"] <- "Team"
  names(DataH)[names(DataH) == "FTHG"] <-"Goal(s)"
  names(DataH)[names(DataH) == "HS"] <-"Shot(s)"
  names(DataH)[names(DataH) == "HST"] <- "Shot(s) on Target"
  names(DataA)[names(DataA) == "FTAG"] <-"Goal(s)"
  names(DataA)[names(DataA) == "AS"] <-"Shot(s)"
  names(DataA)[names(DataA) == "AST"] <- "Shot(s) on Target"
  ConversionData <- rbind(DataH, DataA)
  ConversionData <- t(ConversionData)
  write.csv(ConversionData, paste0("~/Documents/DataVis/ArsConversion", i, ".csv"))
  # Over\Under 2.5 vs odds
  DataH <- subset(Data, (HomeTeam == "Arsenal"), select = c(AwayTeam, FTHG, FTAG, BbAv.2.5, BbAv.2.5.1))
  DataA <- subset(Data, (AwayTeam == "Arsenal"), select = c(HomeTeam, FTHG, FTAG, BbAv.2.5, BbAv.2.5.1))
  names(DataH)[names(DataH) == "AwayTeam"] <- "Team"
  names(DataA)[names(DataA) == "HomeTeam"] <- "Team"
  names(DataH)[names(DataH) == "BbAv.2.5"] <- "Greater Than 2.5 Goals"
  names(DataH)[names(DataH) == "BbAv.2.5.1"] <- "Less Than 2.5 Goals"
  names(DataA)[names(DataA) == "BbAv.2.5"] <- "Greater Than 2.5 Goals"
  names(DataA)[names(DataA) == "BbAv.2.5.1"] <- "Less Than 2.5 Goals"
  DataH$Goals <- DataH$FTHG + DataH$FTAG
  DataA$Goals <- DataA$FTHG + DataA$FTAG
  OUGData <- rbind(DataH, DataA)
  OUGData$`Greater Than 2.5 Goals` <- 1/OUGData$`Greater Than 2.5 Goals`
  OUGData$`Less Than 2.5 Goals` <- 1/OUGData$`Less Than 2.5 Goals`
  OUGData <- OUGData[,-c(2,3)]
  write.csv(OUGData, paste0("~/Documents/DataVis/ArsOUG", i, ".csv"))
}
