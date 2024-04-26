#pragma once

#include "FRM_Power.h"

TArray<TSharedPtr<FJsonValue>> UFRM_Power::getCircuit(UObject* WorldContext)
{
	AFGCircuitSubsystem* CircuitSubsystem = AFGCircuitSubsystem::Get(WorldContext->GetWorld());

	TArray<TSharedPtr<FJsonValue>> JCircuitArray;

	for (UFGCircuitGroup* CircuitGroup : CircuitSubsystem->mCircuitGroups) {
		UFGPowerCircuitGroup* PowerGroup = Cast<UFGPowerCircuitGroup>(CircuitGroup);
		UFGPowerCircuit* PowerCircuit = (PowerGroup->mCircuits[0]);
		UFGCircuit* Circuit = Cast<UFGCircuit>(PowerCircuit);

		TSharedPtr<FJsonObject> JCircuit = MakeShared<FJsonObject>();

		auto CircuitID = Circuit->GetCircuitGroupID();

		JCircuit->Values.Add("CircuitID", MakeShared<FJsonValueNumber>(CircuitID));
		JCircuit->Values.Add("PowerProduction", MakeShared<FJsonValueNumber>(PowerGroup->mBaseProduction));
		JCircuit->Values.Add("PowerConsumed", MakeShared<FJsonValueNumber>(PowerGroup->mConsumption));
		JCircuit->Values.Add("PowerCapacity", MakeShared<FJsonValueNumber>(PowerGroup->mMaximumProductionCapacity));
		JCircuit->Values.Add("PowerMaxConsumed", MakeShared<FJsonValueNumber>(PowerGroup->mMaximumPowerConsumption));
		JCircuit->Values.Add("BatteryDifferential", MakeShared<FJsonValueNumber>(PowerCircuit->mBatterySumPowerInput));
		JCircuit->Values.Add("BatteryPercent", MakeShared<FJsonValueNumber>(100 * (PowerGroup->mTotalPowerStore / PowerGroup->mTotalPowerStoreCapacity)));
		JCircuit->Values.Add("BatteryCapacity", MakeShared<FJsonValueNumber>(PowerGroup->mTotalPowerStoreCapacity));
		JCircuit->Values.Add("BatteryTimeEmpty", MakeShared<FJsonValueString>(SecondsToTimeString(PowerCircuit->mTimeToBatteriesEmpty)));
		JCircuit->Values.Add("BatteryTimeFull", MakeShared<FJsonValueString>(SecondsToTimeString(PowerCircuit->mTimeToBatteriesFull)));
		JCircuit->Values.Add("FuseTriggered", MakeShared<FJsonValueBoolean>(PowerGroup->mIsAnyFuseTriggered));

		JCircuitArray.Add(MakeShared<FJsonValueObject>(JCircuit));
	};

	return JCircuitArray;
};

TArray<TSharedPtr<FJsonValue>> UFRM_Power::getGenerators(UObject* WorldContext, UClass* TypedBuildable)
{