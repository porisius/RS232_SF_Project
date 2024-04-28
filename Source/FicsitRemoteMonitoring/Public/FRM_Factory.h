#pragma once

#include "CoreMinimal.h"
#include "Kismet/BlueprintFunctionLibrary.h"
#include "Kismet/KismetSystemLibrary.h"
#include "FGBuildableSubsystem.h"
#include "FGBlueprintFunctionLibrary.h"
#include "Buildables\FGBuildableFactory.h"
#include "Buildables/FGBuildableHubTerminal.h"
#include "Buildables/FGBuildableTradingPost.h"
#include "Buildables\FGBuildableManufacturer.h"
#include "Buildables\FGBuildableManufacturerVariablePower.h"
#include "Buildables\FGBuildableResourceExtractor.h"
#include "Resources/FGExtractableResourceInterface.h"
#include "Buildables/FGBuildableStorage.h"
#include "FGSchematicManager.h"
#include "FGInventoryLibrary.h"
#include "FGInventoryComponent.h"
#include "FGPowerCircuit.h"
#include "Resources/FGItemDescriptor.h"
#include "FGRecipe.h"
#include "FGBlueprintFunctionLibrary.h"
#include "FGDropPod.h"
#include "FGItemPickup.h"
#include "Logging\StructuredLog.h"
#include "FRM_Library.h"
#include "FRM_Factory.generated.h"

UCLASS()
class FICSITREMOTEMONITORING_API UFRM_Factory : public UFGBlueprintFunctionLibrary
{
	GENERATED_BODY()

public:

	static TArray<TSharedPtr<FJsonValue>> getFactory(UObject* WorldContext, UClass* TypedBuildable);
	static TArray<TSharedPtr<FJsonValue>> getHubTerminal(UObject* WorldContext);
	static TArray<TSharedPtr<FJsonValue>> getPowerSlug(UObject* WorldContext);
	static TArray<TSharedPtr<FJsonValue>> getStorageInv(UObject* WorldContext);
	static TArray<TSharedPtr<FJsonValue>> getWorldInv(UObject* WorldContext);
	static TArray<TSharedPtr<FJsonValue>> getDropPod(UObject* WorldContext);
	static TArray<TSharedPtr<FJsonValue>> getResourceExtractor(UObject* WorldContext);

};
