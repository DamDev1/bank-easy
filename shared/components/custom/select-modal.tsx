import React, { useState } from "react";
import {
    FlatList,
    Modal,
    StyleSheet,
    Text,
    TouchableOpacity,
    View,
} from "react-native";

const SelectPopupModal = ({
  isVisible,
  onClose,
  items,
  onSelect,
  title = "Select the currency",
  selectedValue = null,
}: {
  isVisible: boolean;
  onClose: () => void;
  items: any[];
  onSelect: (item: any) => void;
  title?: string;
  selectedValue?: any;
}) => {
  const [selectedItem, setSelectedItem] = useState(selectedValue);

  const handleSelect = (item: { value: any }) => {
    setSelectedItem(item.value);
    onSelect(item);
    onClose();
  };

  const renderItem = ({ item }: { item: { label: string; value: any } }) => (
    <TouchableOpacity
      style={[styles.item, selectedItem === item.value && styles.selectedItem]}
      onPress={() => handleSelect(item)}
    >
      <Text
        style={[
          styles.itemText,
          selectedItem === item.value && styles.selectedItemText,
        ]}
      >
        {item.label}
      </Text>
    </TouchableOpacity>
  );

  return (
    <Modal
      visible={isVisible}
      onRequestClose={onClose}
      transparent
      style={styles.modal}
      animationType="fade"
    >
      <TouchableOpacity
        className="flex-1 bg-gray-600/50 justify-center items-center p-5"
        onPress={onClose}
      >
        <View className="bg-white rounded-2xl p-5 w-full">
          <Text style={styles.title}>{title}</Text>
          <FlatList
            data={items}
            renderItem={renderItem}
            keyExtractor={(item) => item.value.toString()}
            style={styles.list}
          />
          <TouchableOpacity style={styles.closeButton} onPress={onClose}>
            <Text style={styles.closeButtonText}>Close</Text>
          </TouchableOpacity>
        </View>
      </TouchableOpacity>
    </Modal>
  );
};

const styles = StyleSheet.create({
  modal: {
    flex: 1,
  },
  container: {},
  title: {
    fontSize: 18,
    fontWeight: "bold",
    marginBottom: 15,
    textAlign: "center",
  },
  list: {
    flexGrow: 0,
  },
  item: {
    padding: 15,
    borderBottomWidth: 1,
    borderBottomColor: "#eee",
  },
  selectedItem: {
    backgroundColor: "#f0f8ff",
  },
  itemText: {
    fontSize: 16,
  },
  selectedItemText: {
    color: "#0066cc",
    fontWeight: "bold",
  },
  closeButton: {
    marginTop: 15,
    padding: 10,
    alignItems: "center",
  },
  closeButtonText: {
    color: "#0066cc",
    fontSize: 16,
  },
});

export default SelectPopupModal;
