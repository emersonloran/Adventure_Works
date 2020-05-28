FROM mcr.microsoft.com/dotnet/core/aspnet:3.1 AS base
WORKDIR /app
FROM mcr.microsoft.com/dotnet/core/sdk:3.1 AS build
WORKDIR /src
COPY ["src/QyonAdventureWorks.Api/QyonAdventureWorks.Api.csproj", "QyonAdventureWorks.Api/"]
RUN dotnet restore "QyonAdventureWorks.Api/QyonAdventureWorks.Api.csproj"
COPY ./src .
WORKDIR /src/QyonAdventureWorks.Api
RUN dotnet build "QyonAdventureWorks.Api.csproj" -c Release -o /app
FROM build AS publish
RUN dotnet publish "QyonAdventureWorks.Api.csproj" -c Release -o /app
FROM base AS final
ARG ASPNETCORE_ENVIRONMENT
ENV ASPNETCORE_ENVIRONMENT=${ASPNETCORE_ENVIRONMENT}
WORKDIR /app
COPY --from=publish /app .
ENTRYPOINT ["dotnet", "QyonAdventureWorks.Api.dll"]