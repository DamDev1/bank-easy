import Ionicons from '@expo/vector-icons/Ionicons';
import React, { useState } from "react";
import {
    FlatList,
    Modal,
    StyleSheet,
    Text,
    TextInput,
    TouchableOpacity,
    View,
} from "react-native";

const SelectBankModal = ({
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
  const [searchTerm, setSearchTerm] = useState("");
  const [banks, setBanks] = useState<any[]>([]);

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

  const searchBanks = (query: string) => {
    setSearchTerm(query);
    const filteredItems = items.filter((item) =>
      item.label.toLowerCase().includes(query.toLowerCase())
    );
    setBanks(filteredItems);
    return filteredItems;
  };

  return (
    <Modal
      visible={isVisible}
      onRequestClose={onClose}
      transparent
      style={styles.modal}
      animationType="fade"
    >
      <View
        className="flex-1 bg-gray-600/50 justify-center items-center p-5"
      >
        <View className="bg-white rounded-2xl p-5 w-full">
          <Text style={styles.title}>{title}</Text>
          <View className="gap-3 mb-3 border border-gray-300 p-4 px-3 rounded-2xl flex flex-row items-center justify-between">
            <Ionicons name="search-outline" size={24} color="black" />
            <TextInput placeholder="Search for bank" className='flex-1' value={searchTerm} onChangeText={searchBanks} />
          </View>
          <TouchableOpacity onPress={onClose}>
            <FlatList
              data={banks}
              renderItem={renderItem}
              keyExtractor={(item) => item.value.toString()}
              style={styles.list}
            />
          </TouchableOpacity>
          <TouchableOpacity style={styles.closeButton} onPress={onClose}>
            <Text style={styles.closeButtonText}>Close</Text>
          </TouchableOpacity>
        </View>
      </View>
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

export default SelectBankModal;
